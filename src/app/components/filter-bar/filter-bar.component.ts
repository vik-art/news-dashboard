import { Component, EventEmitter, Output, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: "app-filter-bar",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./filter-bar.component.html",
  styleUrl: "./filter-bar.component.scss",
})
export class FilterBarComponent {
  private fb = inject(FormBuilder);
  @Output() setSearchValue = new EventEmitter<string>();

  search: FormGroup = this.fb.group({ query: ["", Validators.required] });

  setValue() {
    const filterQuery = this.search.controls["query"].value;
    this.setSearchValue.emit(filterQuery);
  }
}
