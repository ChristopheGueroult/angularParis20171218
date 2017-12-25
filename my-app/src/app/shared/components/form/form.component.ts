import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  state = State;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;
  @Output() dataItem: EventEmitter<Item> = new EventEmitter();
  constructor(private _FormBuilder: FormBuilder) {
    this.nameCtrl = this._FormBuilder.control('', [
      Validators.required,
      Validators.minLength(5)
    ]);

    this.refCtrl = this._FormBuilder.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);

    this.stateCtrl = this._FormBuilder.control(State.ALIVRER);

    this.form = this._FormBuilder.group({
      name : this.nameCtrl,
      reference: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {
  }

  process(): void {
    const data = this.form.value as Item;
    this.dataItem.emit(data);
    this.reset();
  }

  reset(): void {
    this.form.reset();
    this.stateCtrl.setValue(State.ALIVRER);
  }

  isError(champ: string) {
    return this.form.get(champ).dirty && this.form.get(champ).hasError('minlength');
  }

}
