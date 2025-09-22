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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarService = class CarService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(newCar) {
        let marca = await this.prisma.brand.findFirst({
            where: {
                id: newCar.brand_id
            }
        });
        if (!marca) {
            throw new common_1.HttpException('La marca no existe', 400);
        }
        let existe = await this.prisma.car.findFirst({
            where: { plate: newCar.plate }
        });
        if (existe) {
            throw new common_1.HttpException("LA PLACA YA EXISTE", 404);
        }
        else {
            return await this.prisma.car.create({
                data: {
                    plate: newCar.plate,
                    release_date: new Date(newCar.release_date),
                    is_available: newCar.is_available,
                    price: newCar.price,
                    brand: {
                        connect: { id: newCar.brand_id }
                    }
                }
            });
        }
    }
    async findById(id) {
        let existe = await this.prisma.car.findFirst({
            where: { id: id }
        });
        if (!existe) {
            throw new common_1.HttpException('El carro no existe', 404);
        }
        else {
            return {
                "success": true,
                "data": existe
            };
        }
    }
    async findAll() {
        let carros = await this.prisma.car.findMany({
            orderBy: { 'plate': 'asc' }
        });
        if (carros.length === 0) {
            throw new common_1.HttpException('No hay carros', 404);
        }
        else {
            return carros;
        }
    }
    async delete(id) {
        let existe = await this.prisma.car.findFirst({ where: { id: id } });
        if (!existe) {
            throw new common_1.HttpException('El carro no existe', 404);
        }
        else {
            await this.prisma.car.delete({ where: { id: id } });
            return {
                "success": true,
                "message": "El carro ha sido eliminado"
            };
        }
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarService);
//# sourceMappingURL=car.service.js.map