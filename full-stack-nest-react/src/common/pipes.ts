import { BadGatewayException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectId } from "mongodb";


@Injectable()
export class ParseObjectIdPipe implements PipeTransform<any, ObjectId>{
    public transform(value: any): ObjectId {
        try {
            const transformedObjectId: ObjectId = ObjectId.createFromHexString(value)
            return transformedObjectId
        } catch (error) {
            throw new BadGatewayException('Validation failed (ObjectId is expected)')
        }
    }
}