"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./Container";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

const Footer = () => {
  const contact = {
    telephone: "500327556",
    email: "studnie@and-wiert.pl",
    facebook: "https://www.facebook.com/andrzej.wolski.37201",
  };

  const mapsCoords = {
    lat: 49.83963653988157,
    lng: 20.952945784982635,
  };

  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          style={{ width: "100vw", height: "50vh" }}
          defaultCenter={mapsCoords}
          defaultZoom={15}
          gestureHandling={"cooperative"}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={mapsCoords} ref={markerRef} />
          <InfoWindow
            anchor={marker}
            shouldFocus={true}
            headerContent={"Studnie głębinowe And-Wiert"}
          />
        </Map>
      </APIProvider>
      <Container className={"bg-dark-blue"}>
        <footer
          className={"flex sm:flex-row flex-col gap-8 justify-between py-8"}
        >
          <div className={"flex gap-16 text-gray-100"}>
            <section className={"space-y-4"}>
              <Link
                className={"text-gray-100 text-3xl font-bold"}
                href={"https://and-wiert.pl"}
              >
                <FontAwesomeIcon icon={faDroplet} className={"mr-1"} />
                And-Wiert
              </Link>
              <div>
                <h2 className={"sm:text-xl text-lg"}>Studnie głębinowe</h2>
                <p className={"sm:text-base text-sm"}>
                  Tel: {contact.telephone}
                </p>
                <p className={"sm:text-base text-sm"}>
                  E-mail: {contact.email}
                </p>
              </div>
            </section>

            <div
              className={
                "md:flex hidden flex-col items-start justify-between text-lg text-gray-100"
              }
            >
              {/*{pageLinks.map((link, index) => (*/}
              {/*    <Anchor*/}
              {/*        key={index}*/}
              {/*        className={"transition hover:text-dark-orange"}*/}
              {/*        underlineColor={"bg-dark-orange"}*/}
              {/*        animated={true}*/}
              {/*        onClick={() => scrollToTheElement(index)}*/}
              {/*        title={link.title}*/}
              {/*    >*/}
              {/*        {link.title}*/}
              {/*    </Anchor>*/}
              {/*))}*/}
            </div>
          </div>

          <div className={"text-gray-100 text-lg space-y-4"}>
            <div>
              <Link
                href={contact.facebook}
                title={"Odwiedź nas na Facebook'u"}
                className={"items-start self-start"}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={"text-2xl mr-1"}
                />
                Facebook
              </Link>
            </div>
          </div>
        </footer>
        <div
          className={
            "flex md:flex-row flex-col md:justify-between items-center border-t-[.1rem] border-gray-100 sm:py-4 py-2"
          }
        >
          <div className={"flex items-center"}>
            <div className={"text-dark-orange"}>
              Copyright © <span>{new Date().getFullYear()}</span>{" "}
              <span className={"text-gray-100"}>And-Wiert</span>
            </div>
          </div>
          <div className={"flex items-center"}>
            <span className={"text-gray-100 mr-1"}>Realizacja -</span>
            <Link
              className={"text-dark-orange"}
              href={"mailto:kamilekkrawczyk404@gmail.com"}
              title={"Realizacja - Kamil Krawczyk"}
            >
              Kamil Krawczyk
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
