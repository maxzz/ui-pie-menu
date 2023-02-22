import React from 'react';

export function GridPreview() {
    return (
        <div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-flow-dense">
                <div className="mx-2 px-2 w-24 my-2 text-neutral-100/70 bg-neutral-900/70 border-neutral-900/20 border rounded-lg">Title</div>
                <div className="hidden mx-2 px-2 col-span-full bg-orange-500/90 border-neutral-900/20">Content</div>

                <div className="mx-2 px-2 w-24 my-2 text-neutral-100/70 bg-neutral-900/70 border-neutral-900/20 border rounded-lg">Title</div>
                <div className="hidden mx-2 px-2 col-span-full bg-orange-500/90 border-neutral-900/20">Content</div>

                <div className="mx-2 px-2 w-24 my-2 text-neutral-100/70 bg-neutral-900/70 border-neutral-900/20 border rounded-lg">Title</div>
                <div className="hidden mx-2 px-2 col-span-full bg-orange-500/90 border-neutral-900/20">Content</div>
            </div>
        </div>
    );
}
