"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCarDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCarDto {
    plate;
    release_date;
    is_available;
    price;
    brand_id;
}
exports.CreateCarDto = CreateCarDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'La placa es obligatoria'
    }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "plate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'La fecha de lanzamiento es obligatoria'
    }),
    __metadata("design:type", Date)
], CreateCarDto.prototype, "release_date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'Debe ser un valor true o false'
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCarDto.prototype, "is_available", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'El precio debe ser un número entero'
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'El id de la marca debe ser un atributo de número'
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "brand_id", void 0);
//# sourceMappingURL=create-car.dto.js.map