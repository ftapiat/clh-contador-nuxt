import { extend } from "vee-validate";
import { required, max } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Este campo es obligatorio"
});

extend('max', {
  ...max,
  params: ['length'],
  message: 'No puede tener más de {length} caracteres'
});
