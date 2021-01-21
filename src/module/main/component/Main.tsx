import React from 'react';
import type { AppProps } from 'next/app';
import Recoil from 'recoil';
import 'tailwindcss/tailwind.css';

export const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Recoil.RecoilRoot>
            <Component {...pageProps} />
        </Recoil.RecoilRoot>
    );
};
