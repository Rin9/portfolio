import React from "react";
import { TileBackground, TileWrapper, TileContent, Tile } from "./Tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./Work";
import Image from "next/image";
import butterBuyImage from "/assets/projects/project-better-buy.png";
import neatBlogImage from "/assets/projects/neat-blog-1.png";
import newFashionImage from "/assets/projects/new-fashion-1.png";
import uberEats from "/assets/projects/uberEatsClone.png";
import redditClone from "/assets/projects/redditClone.png";

const Works = () => {
  return (
    <TileWrapper numOfPages={5}>
      <TileBackground>
        <WorkBackground></WorkBackground>
      </TileBackground>
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
                    <WorkLink href="https://https://reddit-clone-phi-orcin.vercel.app/">
                      Reddit Clone
                    </WorkLink>
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight pt-5">
                    <WorkLink href="https://github.com/Rin9/reddit_clone">
                      Github
                    </WorkLink>
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                  <Image
                    src={redditClone}
                    layout="responsive"
                    width={1620}
                    height={1240}
                    alt="reddit clone"
                  />
                </WorkRight>
              </WorkContainer>
            );
          }}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
