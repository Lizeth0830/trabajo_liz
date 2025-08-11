"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
let BrandsService = class BrandsService {
    brands = [
        {
            id: 1,
            name: "Toyota",
            description: "Marca Japonesa",
            createdAt: new Date
        },
        {
            id: 2,
            name: "BYD",
            description: "Vehiculos Electricos",
            createdAt: new Date
        }
    ];
    create(body) {
        this.brands.push(body);
        return body;
    }
    findAll() {
        return this.brands;
        return `This action returns all brands`;
    }
    findOne(id) {
        let marca = this.brands.find(function (brand) {
            return brand.id === id;
        });
        return marca;
    }
    update(id, updateBrandDto) {
        return `This action updates a #${id} brand`;
    }
    remove(id) {
        this.brands = this.brands.filter(function (Brand) {
            return Brand.id !== id;
        });
        return "elemento eliminado";
    }
};
exports.BrandsService = BrandsService;
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
//# sourceMappingURL=brands.service.js.map