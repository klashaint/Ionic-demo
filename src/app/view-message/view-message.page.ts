import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KlashaOptions } from 'angular-klasha';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage  {
  options: KlashaOptions = {
    email: 'test@gmail.com',
    phone_number: '+2348033582680',
    merchantKey: 'W2mbGtdx5vKCepFaUm2CqdzebaVW9z22shubB4xFbKTR3g4sL72+7qNQYHTUEfs0my1e/hAO1Nkdx9YbXTjUOg==',
    amount: 1000,
    sourceCurrency: '',
    destinationCurrency: '',
    tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1),
    businessId: '1',
    fullname: 'test name',
    paymentDescription: '',
    kit: {
      currency: '',
      phone_number: '2348033582680',
      email: 'test@gmail.com',
      fullname: 'test name',
      tx_ref: '',
      paymentType: '',
    }

  };
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
  paymentInit() {
    console.log('Payment initialized');
  }
  paymentCancel() {
    console.log('Payment Cancelled');
  }

  paymentDone(info: any) {
    console.log(info);
  }
}
