import React, { CSSProperties, ReactNode } from 'react';

const styleText: CSSProperties = {
    textShadow:
        `
        0.02em 0.02em 0 var(--detail-color), 
        -0.02em -0.02em 0 var(--detail-color), 
        -0.02em 0.02em 0 var(--detail-color), 
        0.02em -0.02em 0 var(--detail-color), 
        0 0.02em 0 var(--detail-color), 
        0 -0.02em 0 var(--detail-color), 
        -0.02em 0 0 var(--detail-color), 
        0.02em 0 0 var(--detail-color)
        `
};

function Cell({ caption, content }: { caption: ReactNode, content: ReactNode; }) {
    return (<>
        <div className="cell-cap mx-2 my-2 px-2 py-4 text-4xl tracking-tighter uppercase text-neutral-300/80 bg-neutral-400/20 border-neutral-900/70 border rounded-lg shadow [--detail-color:#6a00ff] select-none cursor-pointer active:scale-[.97] grid place-items-center"
            style={styleText}
            onClick={(event) => {
                const el = event.currentTarget;
                const parentEl = el.parentElement!;
                const cnts = parentEl.querySelectorAll('.cell-cap');
                cnts.forEach((capEl) => {
                    const cnt = capEl.nextElementSibling;
                    if (capEl === el) {
                        cnt?.classList.toggle('hidden');
                    } else {
                        cnt?.classList.add('hidden');
                    }
                });
            }}
        >
            {caption}
        </div>

        <div className="cell-cnt hidden mx-2 px-2 h-48 col-span-full bg-orange-500/90 border-neutral-900/20 first-letter:text-2xl first-letter:font-bold">
            {content}
        </div>
    </>);
}

const articles = [
    { caption: 'caption 1', content: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'caption 2', content: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'caption 3', content: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'caption 4', content: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'caption 5', content: '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'caption 6', content: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'caption 7', content: '7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
];

export function GridPreview() {
    return (
        <div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-flow-dense">
                {articles.map((article, idx) => (
                    <Cell {...article} key={idx} />
                ))}
            </div>
        </div>
    );
}
