import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Professionalaudiobook.module.css'
import Image from 'next/image'
import banslider12 from '/public/images/professionalaudiobook/high.png'
import Link from 'next/link'
import { useEffect } from 'react';

const Professionalaudiobook = () => {

    useEffect(() => {

        const audioPlayer = document.querySelector(".audio-player");
        const audio = new Audio(
            "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
        );
   

      

        audio.addEventListener(
            "loadeddata",
            () => {
                audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
                    audio.duration
                );
                audio.volume = .75;
            },
            false
        );

    
        const timeline = audioPlayer.querySelector(".timeline");
        timeline.addEventListener("click", e => {
            const timelineWidth = window.getComputedStyle(timeline).width;
            const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
            audio.currentTime = timeToSeek;
        }, false);

     
        const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
        volumeSlider.addEventListener('click', e => {
            const sliderWidth = window.getComputedStyle(volumeSlider).width;
            const newVolume = e.offsetX / parseInt(sliderWidth);
            audio.volume = newVolume;
            audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
        }, false)

     
        setInterval(() => {
            const progressBar = audioPlayer.querySelector(".progress");
            progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
            audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
                audio.currentTime
            );
        }, 500);

     
        const playBtn = audioPlayer.querySelector(".controls .toggle-play");
        playBtn.addEventListener(
            "click",
            () => {
                if (audio.paused) {
                    playBtn.classList.remove("play");
                    playBtn.classList.add("pause");
                    audio.play();
                } else {
                    playBtn.classList.remove("pause");
                    playBtn.classList.add("play");
                    audio.pause();
                }
            },
            false
        );

        audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
            const volumeEl = audioPlayer.querySelector(".volume-container .volume");
            audio.muted = !audio.muted;
            if (audio.muted) {
                volumeEl.classList.remove("icono-volumeMedium");
                volumeEl.classList.add("icono-volumeMute");
            } else {
                volumeEl.classList.add("icono-volumeMedium");
                volumeEl.classList.remove("icono-volumeMute");
            }
        });

     
        function getTimeCodeFromNum(num) {
            let seconds = parseInt(num);
            let minutes = parseInt(seconds / 60);
            seconds -= minutes * 60;
            const hours = parseInt(minutes / 60);
            minutes -= hours * 60;

            if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
            return `${String(hours).padStart(2, 0)}:${minutes}:${String(
                seconds % 60
            ).padStart(2, 0)}`;
        }


    }, []);


    return (
        <>
            <section className={styles.professionalaudiobook}>

                <Container>
                    <Row className='gy-5'>
                        <Col lg={3}>
                            <Image alt="Book Writing Experts" src={banslider12} className="img-fluid" />
                        </Col>
                        <Col lg={9}>

                            <h3 className='color-white font-f font14 fw400'>Continue Reading</h3>
                            <h2 className='color-white font-f linh mt-3'> <Link href="javascript:$zopim.livechat.window.show();" className='color-black font-f fw700 textdocationnone hover1'>Book Writing Experts</Link> Is waiting for you to Ask <br className="d-none d-xl-block" /> for a <Link href="javascript:$zopim.livechat.window.show();" className='color-black font-f fw700 textdocationnone hover1'> Professional Audio Book Production</Link></h2>



                          


                            <div></div>



                            <div className="audio-player">

                                <div className='chapter'>


                                    <div className="name">Chapter 8</div>

                                    <div className="time">
                                        <div className="current"> 0.00</div>
                                        <div className="length"></div>
                                    </div>

                                </div>

                                <div className="timeline">

                                    <div className="progress"></div>
                                </div>
                                <div className="controls">
                                    <div className="play-container">
                                        <div className="toggle-play play">
                                        </div>
                                    </div>


                                    <div className="volume-container">
                                        <div className="volume-button">
                                            <div className="volume icono-volumeMedium"></div>
                                        </div>

                                        <div className="volume-slider">
                                            <div className="volume-percentage"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </Col>
                    </Row>
                </Container>



            </section>

        </>
    )
}

export default Professionalaudiobook