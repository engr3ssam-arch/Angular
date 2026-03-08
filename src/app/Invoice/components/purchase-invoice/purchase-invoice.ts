import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';
import { Products } from '../../../shared/interface/products';
import { ProductService } from '../../service/product-service';

@Component({
  selector: 'app-invoice',
  imports: [ReactiveFormsModule ,CommonModule,NgFor],
  templateUrl: './Purchase-invoice.html',
  styleUrl: './purchase-invoice.scss',
})
export class Invoice {
 
  invoiceForm!: FormGroup; 
  invoiceDetail!: FormArray;
  productList: Products[] = [];


  constructor(private productService: ProductService,private builder: FormBuilder) {
    this.invoiceForm = this.builder.group({
      invoiceNo: this.builder.control('', Validators.required),
      customerName: this.builder.control('', Validators.required),
      customerPhone: this.builder.control('', Validators.required),
      address: this.builder.control('', Validators.required),
      total: this.builder.control({ value: 0, disabled: true }),
      details: this.builder.array([], Validators.required)
    });
  }

  
  get products() {
    return this.invoiceForm.get('details') as FormArray;
  }

 ngOnInit() {

 this.productService.getProducts().subscribe(data => {
      this.productList = data;
    });

    if (this.products.length === 0) {
      this.addNewProduct();
    }
  }

  addNewProduct() {
  let lastGroup = this.products.at(this.products.length - 1) as FormGroup;

  if (lastGroup) {
    let values = lastGroup.value;
    
    if (!values.id || !values.name || values.qty <= 0) {
      alert("You Must Add the Current Row");
      return;
    }
  }

 
  this.products.push(this.generateRow());
}
 

  generateRow() {
    return this.builder.group({
      id: this.builder.control('', Validators.required),
      name: this.builder.control('', Validators.required),
      qty: this.builder.control(1, Validators.required),
      price: this.builder.control(0, Validators.required),
      total: this.builder.control({ value: 0, disabled: true })
    });
  }
  
calculateRowTotal(index: number) {
  const row = this.products.at(index);
  const qty = row.get('qty')?.value || 0;
  const price = row.get('price')?.value || 0;
  
  const rowTotal = qty * price;

   row.patchValue({
    total: rowTotal
  });

 this.calculateGrandTotal();
}

calculateGrandTotal() {
  const totalSum = this.products.controls
    .map(control => control.get('total')?.value || 0)
    .reduce((acc, curr) => acc + curr, 0);

  this.invoiceForm.patchValue({
    total: totalSum
  });
}

  removeProduct(index: number) {
    this.products.removeAt(index);
    this.calculateGrandTotal();
  }


  onProductChange(index: number) {
   let row = this.products.at(index);
    let selectId = row.get('id')?.value;
    let selectedProduct = this.productService.getProductById(selectId);

    if (selectedProduct) {
      row.patchValue({
       name: selectedProduct.productName,
       price: selectedProduct.productPrice
      });
      this.calculateRowTotal(index);
    }
  }






  getFilteredProducts(index: number): Products[] {
   let selectedId = this.products.controls
    .map((control, i) => i !== index ? control.get('id')?.value : null)
    .filter(id => id !== null);

  return this.productList.filter(product => !selectedId.includes(product.productId));
}
}
