import { useEffect} from 'react';

import classNames from 'classnames/bind';
import styles from'./NotFound.module.scss'


const cx = classNames.bind(styles);


function NotFound() {


    useEffect(()=> {
        (function() {
            function ready(fn) {
                if (document.readyState !== 'loading'){
                    fn();
                } else {
                    document.addEventListener('DOMContentLoaded', fn);
                }
            }
    
            function makeSnow(el) {
                var ctx = el.getContext('2d');
                var width = 0;
                var height = 0;
                var particles = [];
                var Particle = function() {
                    this.x = this.y = this.dx = this.dy = 0;
                    this.reset();
                }
                
                Particle.prototype.reset = function() {
                    this.y = Math.random() * height;
                    this.x = Math.random() * width;
                    this.dx = (Math.random() * 1) - 0.5;
                    this.dy = (Math.random() * 0.5) + 0.5;
                }
                
                function createParticles(count) {
                    if (count !== particles.length) {
                        particles = [];
                        for (var i = 0; i < count; i++) {
                            particles.push(new Particle());
                        }
                    }
                }
                        
                function onResize() {
                    width = window.innerWidth;
                    height = window.innerHeight;
                    el.width = width;
                    el.height = height;
                    createParticles((width * height) / 10000);
                }
                
                function updateParticles() {
                    ctx.clearRect(0, 0, width, height);
                    ctx.fillStyle = '#f6f9fa';
                    particles.forEach(function(particle) {
                        particle.y += particle.dy;
                        particle.x += particle.dx;
                        if (particle.y > height) {
                            particle.y = 0;
                        }
                        
                        if (particle.x > width) {
                            particle.reset();
                            particle.y = 0;
                        }
                        
                        ctx.beginPath();
                        ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
                        ctx.fill();
                    });
                    window.requestAnimationFrame(updateParticles);
                }
                
                onResize();
                updateParticles();
                window.addEventListener('resize', onResize);
            }
            
            ready(function() {
                var canvas = document.getElementById('snow');
                makeSnow(canvas);
            });
        })();
    },[])


    return (
        <>
          <div className={cx('content')}><canvas className={cx('snow')} id="snow"></canvas>
            <div className={cx('main-text')}>
                <h1>Aw jeez.<br />That page has gone missing.</h1><a className={cx('home-link')} href="/">Hitch a ride back home.</a>
            </div>
            <div className={cx('ground')}>
                <div className={cx('mound')}>
                    <div className={cx('mound_text')}>404</div>
                    <div className={cx('mound_spade')}></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NotFound;