import React, { ReactNode } from 'react';

function Cell({caption, content}: {caption: ReactNode, content: ReactNode}) {
    return (<>
        <div className="cell-cap mx-2 px-2 w-48 h-24 my-2 text-neutral-100/70 bg-neutral-900/70 border-neutral-900/20 border rounded-lg"
            onClick={(event) => {
                const el = event.currentTarget;
                const parentEl = el.parentElement!;
                const cnts = parentEl.querySelectorAll('.cell-cap');
                cnts.forEach((capEl) => {
                    const cnt = capEl.nextElementSibling;
                    if (capEl === el) {
                        cnt?.classList.remove('hidden');
                    } else {
                        cnt?.classList.add('hidden');
                    }
                });
            }}
        >
            {caption}
        </div>

        <div className="cell-cnt hidden mx-2 px-2 h-48 col-span-full bg-orange-500/90 border-neutral-900/20">
            {content}
        </div>
    </>);
}

export function GridPreview() {
    return (
        <div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-flow-dense">
                <Cell caption={'caption 1'} content={'content 1'} />
                <Cell caption={'caption 2'} content={'content 2'} />
                <Cell caption={'caption 3'} content={'content 3'} />
                <Cell caption={'caption 4'} content={'content 4'} />
                <Cell caption={'caption 5'} content={'content 5'} />
                <Cell caption={'caption 6'} content={'content 6'} />
            </div>
        </div>
    );
}
