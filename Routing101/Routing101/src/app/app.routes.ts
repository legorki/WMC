import { Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {BComponent} from "./b/b.component";
import {AComponent} from "./a/a.component";
import {DComponent} from "./d/d.component";
import {EComponent} from "./e/e.component";

export const routes: Routes = [
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'd', component: DComponent},
  { path: 'e', component: EComponent}
];
