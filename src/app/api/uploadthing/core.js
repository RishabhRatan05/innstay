'use client'
import { createUploadthing} from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
const token = localStorage.getItem('token')
 
const auth = (req) => ({ id: token}); 
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth(req);
 
      if (!user) throw new UploadThingError("Unauthorized");
 
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
 
      return { uploadedBy: metadata.userId };
    }),
} 
 
export default ourFileRouter;