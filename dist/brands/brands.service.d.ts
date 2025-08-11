import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
export declare class BrandsService {
    private brands;
    create(body: any): any;
    findAll(): Brand[] | "This action returns all brands";
    findOne(id: number): Brand | undefined;
    update(id: number, updateBrandDto: UpdateBrandDto): string;
    remove(id: number): string;
}
