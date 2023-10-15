'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import Card from '~/components/card/card';

export default function Home() {
    const router = useRouter();

    function handleNavigate() {
        router.push('/services/web');
    }

    return (
        <div>
            hi Hello this is abhay rana
            <Card />
            <Link href="/services/web" className="border border-green-500 p-3">
                Link tag Service Web
            </Link>
            <button
                className="border border-red-500 p-3"
                onClick={handleNavigate}
            >
                Move To Services Web
            </button>
        </div>
    );
}
