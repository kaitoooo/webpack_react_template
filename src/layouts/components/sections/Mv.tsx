import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BasePicture from '../common/BasePicture';
import BaseImage from '../common/BaseImage';

const Mv: React.VFC = () => {
    const ref = useRef<HTMLDivElement>(null);

    // 関数の実行タイミングをレンダリング後まで遅延させるフック
    useEffect(() => {
        const tl = gsap.timeline();
        const test = document.querySelector('[data-mv="title"]');
        tl.to(test, {
            duration: 1,
            opacity: 0,
        });
        tl.play();

        if (ref.current) {
            ref.current.style.color = 'green';
        }
    }, []);

    return (
        <section className="mv">
            <h1 className="mv__title" data-mv="title">
                TEST
            </h1>
            <h2 className="mv__sub-title" ref={ref}>
                TEST2
            </h2>
            <p className="mv__text">
                React
                <br />
                テンプレート
            </p>
            <div className="mv__img">
                <BaseImage img={'robot.jpeg'} role={'none'} width={100} height={100}></BaseImage>
            </div>
            {/* <div className="mv__image">
                <BasePicture pcImg={'robot.jpeg'} spImg={'mv/mv_obi_2.png'} alt={'test'} width={100} height={100}></BasePicture>
            </div> */}
        </section>
    );
};

export default Mv;
