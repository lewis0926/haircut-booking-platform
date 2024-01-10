import BlobModel from "../models/blob.model";
import BlobInterface from "../interfaces/blob.interface";

class BlobService {
  private readonly blobModel;

  constructor(
  ) {
    this.blobModel = BlobModel;
  }

  public getBlobsRefPaths = async (userId: string, type: string): Promise<string[]> => {
    if (!userId || !type) throw new Error("Missing userId or type");

    const blobs = await this.blobModel.find({userId, type});
    return blobs.map(blob => `${blob.type}/${blob.fileName}`);
  }

  public createBlob = async (body: any): Promise<BlobInterface> => {
    const blob = new this.blobModel(body);
    await blob.save();
    return blob;
  }
}

export default BlobService;