import React, { useEffect } from "react";
import appwriteService from "../appwrite/config.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full rounded-xl bg-gray-100 p-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="rounded-xl"
                        onError={(e) => {
                            console.log("IMAGE URL:", e.currentTarget.src);
                            console.log("IMAGE FAILED TO LOAD");
                        }}
                    />

                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;