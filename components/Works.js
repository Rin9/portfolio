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
import neatBlogImage from "/assets/projects/neat-blog-1.png";
import newFashionImage from "/assets/projects/new-fashion-1.png";

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
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
                  <WorkLink href="https://neat-blog.vercel.app/">
                    Neat Blog
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
          page={1}
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
          page={2}
          renderContent={({ progress }) => {
            return (
              <WorkContainer>
                <WorkLeft progress={progress}>
                  <div>We built</div>
                </WorkLeft>
              </WorkContainer>
            );
          }}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
