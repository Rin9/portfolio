import React from 'react';
import { TileBackground, TileWrapper, TileContent, Tile } from './Tile';
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from './Work';
import Image from 'next/image';
import butterBuyImage from '/assets/projects/project-better-buy.png';
import neatBlogImage from '/assets/projects/neat-blog-1.png';
import newFashionImage from '/assets/projects/new-fashion-1.png';
import uberEats from '/assets/projects/uberEatsClone.png';
import redditClone from '/assets/projects/redditClone.png';
import tiktik from '/assets/projects/tiktik.png';
import welcomehomes from '/assets/projects/welcomehome.png';
import fittime from '/assets/projects/fittime.png';
import distanceEducation from '/assets/projects/de.png';

const TechStack = () => {};

const Works = ({ type }) => {
  if (type === 'work') {
    return (
      <TileWrapper numOfPages={3}>
        <TileBackground>
          <WorkBackground></WorkBackground>
        </TileBackground>

        {/* work projects */}

        <TileContent>
          <Tile
            page={0}
            renderContent={({ progress }) => (
              <WorkContainer>
                <WorkLeft progress={progress}>
                  <div>Welcome Building Corp.</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="https://welcomehomes.com/">
                      Welcome Home
                    </WorkLink>
                  </div>
                  <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                    Welcome Building Corporation makes it easy for home buyers
                    to build a newly constructed home without having to deal
                    with delays and headaches of coordinating with contractors,
                    architects, and other parties.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                  <Image
                    src={welcomehomes}
                    layout="responsive"
                    width={1620}
                    height={1240}
                    alt="Welcome Home"
                  />
                </WorkRight>
              </WorkContainer>
            )}
          ></Tile>
          <Tile
            page={1}
            renderContent={({ progress }) => (
              <WorkContainer>
                <WorkLeft progress={progress}>
                  <div>Net Star</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="http://www.fit-time.com">Fit Time</WorkLink>
                  </div>
                  <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                    An online personal training and fitness platform that
                    seamlessly connects fitness professionals and their clients.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                  <Image
                    src={fittime}
                    layout="responsive"
                    width={1620}
                    height={1240}
                    alt="Fit Time"
                  />
                </WorkRight>
              </WorkContainer>
            )}
          ></Tile>
          <Tile
            page={2}
            renderContent={({ progress }) => {
              return (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <div>Beijing Distance Education</div>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                      <WorkLink href="https://www.zikao365.com/">
                        Continuous Education
                      </WorkLink>
                    </div>
                    <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                      Help graduated people for decades or elderly all around
                      China to keep learning new skills with online video
                      classes and tests.
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <Image
                      src={distanceEducation}
                      layout="responsive"
                      width={1620}
                      height={1240}
                      alt="Distance Education"
                    />
                  </WorkRight>
                </WorkContainer>
              );
            }}
          ></Tile>
        </TileContent>
      </TileWrapper>
    );
  }
  if (type === 'personal') {
    return (
      <TileWrapper numOfPages={5}>
        <TileBackground>
          <WorkBackground></WorkBackground>
        </TileBackground>

        {/* personal projects */}
        <TileContent>
          <Tile
            page={0}
            renderContent={({ progress }) => (
              <WorkContainer>
                <WorkLeft progress={progress}>
                  <div>I built</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="https://better-buy-seven.vercel.app">
                      Better Buy
                    </WorkLink>
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight pt-5">
                    <WorkLink href="https://github.com/Rin9/better_buy">
                      Github
                    </WorkLink>
                  </div>
                  <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                    A React-based E-commerce Web App. Fully responsive, powered
                    by Stripe API.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                  <Image
                    src={butterBuyImage}
                    layout="responsive"
                    width={1620}
                    height={1240}
                    alt="better buy"
                  />
                </WorkRight>
              </WorkContainer>
            )}
          ></Tile>
          <Tile
            page={1}
            renderContent={({ progress }) => (
              <WorkContainer>
                <WorkLeft progress={progress}>
                  <div>I built</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="https://neat-blog.vercel.app/">
                      Neat Blog
                    </WorkLink>
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight pt-5">
                    <WorkLink href="https://github.com/Rin9/neat_blog">
                      Github
                    </WorkLink>
                  </div>
                  <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                    A simple blog build with Next.js & GraphCMS & Chakra UI.
                    Design by ME.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                  <Image
                    src={neatBlogImage}
                    layout="responsive"
                    width={1240}
                    height={1620}
                    alt="neat blog"
                  />
                </WorkRight>
              </WorkContainer>
            )}
          ></Tile>
          <Tile
            page={2}
            renderContent={({ progress }) => {
              return (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <div>I built</div>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                      <WorkLink href="https://new-fashion.vercel.app/">
                        New Fashion
                      </WorkLink>
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold tracking-tight pt-5">
                      <WorkLink href="https://github.com/Rin9/new_fashion">
                        Github
                      </WorkLink>
                    </div>
                    <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                      A fully functional fashion e-commerce website. Inspired by
                      a fashion brand I love based in NYC.
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <Image
                      src={newFashionImage}
                      layout="responsive"
                      width={1240}
                      height={1620}
                      alt="new fashion"
                    />
                  </WorkRight>
                </WorkContainer>
              );
            }}
          ></Tile>
          <Tile
            page={3}
            renderContent={({ progress }) => {
              return (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <div>I built</div>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                      <WorkLink href="https://uber-eats-clone-chi.vercel.app/">
                        Uber Eats Clone
                      </WorkLink>
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold tracking-tight pt-5">
                      <WorkLink href="https://github.com/Rin9/uber_eats_clone">
                        Github
                      </WorkLink>
                    </div>
                    <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                      Just as name shown, the Uber Eats clone but better with
                      fully responsive design.
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <Image
                      src={uberEats}
                      layout="responsive"
                      width={1620}
                      height={1240}
                      alt="uber eats clone"
                    />
                  </WorkRight>
                </WorkContainer>
              );
            }}
          ></Tile>
          <Tile
            page={4}
            renderContent={({ progress }) => {
              return (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <div>I built</div>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                      <WorkLink href="https://short-video-social-media-app.vercel.app/">
                        TikTik
                      </WorkLink>
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold tracking-tight pt-5">
                      <WorkLink href="https://github.com/Rin9/short_video_social_media_app">
                        Github
                      </WorkLink>
                    </div>
                    <div className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
                      A short video sharing platform. Powered by Sanity with
                      google login services.
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <Image
                      src={tiktik}
                      layout="responsive"
                      width={1620}
                      height={1240}
                      alt="TikTik"
                    />
                  </WorkRight>
                </WorkContainer>
              );
            }}
          ></Tile>
        </TileContent>
      </TileWrapper>
    );
  }
};

export default Works;
