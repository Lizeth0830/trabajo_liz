import { VendorsServiceService } from './vendors.service.service';
export declare class VendorsController {
    private readonly VendorsServiceService;
    constructor(VendorsServiceService: VendorsServiceService);
    create(body: any): void;
    findAll(): void;
    findOne(id: number): void;
    update(id: string): string;
    remove(id: string): void;
}
