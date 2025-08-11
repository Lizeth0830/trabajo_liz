import { VendorsServiceService } from './vendors.service.service';
export declare class VendorsController {
    private readonly VendorsServiceService;
    constructor(VendorsServiceService: VendorsServiceService);
    create(body: any): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: string): string;
    remove(id: string): {
        success: boolean;
        mensaje: any;
    };
}
