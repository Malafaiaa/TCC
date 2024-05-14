import style from '../section.module.css';

export default function SectionAboutUs(props) {
    return (
        <section className={style.section_sobre} id="about_us">
            <h1>SOBRE NÓS</h1>
            <div className={style.container_sobre}>
                <div className={style.box_sobre}>
                    <img src="/images/undraw1.png" alt="" className={style.img_sobre} />
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi omnis vitae harum illum molestias asperiores earum quos? Magni vero id minus praesentium facere atque maiores iste ratione repellendus sapiente.</h1>
                </div>
                <div className={style.box_sobre}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi omnis vitae harum illum molestias asperiores earum quos? Magni vero id minus praesentium facere atque maiores iste ratione repellendus sapiente.</h1>
                    <img src="/images/undraw2.png" alt="" className={style.img_sobre} />
                </div>
            </div>
        </section>
    );
}