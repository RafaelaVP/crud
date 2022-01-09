import { getRepository } from "typeorm";
import { Video } from "../entities/videos";

export class DeleteVideoService {
    async execute(id:string) {
        const repo = getRepository(Video);

        if(!await repo.findOne(id)) {
            return new Error("no exist")
        }

        await repo.delete(id);
    }
}