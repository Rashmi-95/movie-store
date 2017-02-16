--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: actor; Type: TABLE; Schema: public; Owner: rashmiranganathan
--

CREATE TABLE actor (
    actor_name character varying(100) NOT NULL,
    movie_name character varying(50) NOT NULL
);


ALTER TABLE actor OWNER TO rashmiranganathan;

--
-- Name: movie; Type: TABLE; Schema: public; Owner: rashmiranganathan
--

CREATE TABLE movie (
    movie_name character varying(100) NOT NULL,
    release_date timestamp without time zone NOT NULL,
    studio character varying(50) NOT NULL
);


ALTER TABLE movie OWNER TO rashmiranganathan;

--
-- Data for Name: actor; Type: TABLE DATA; Schema: public; Owner: rashmiranganathan
--

COPY actor (actor_name, movie_name) FROM stdin;
Actor 1	Movie 1
Actor 1	Movie 2
Actor 1	Movie 5
Actor 2	Movie 2
Actor 2	Movie 3
Actor 3	Movie 1
Actor 3	Movie 2
Actor 3	Movie 3
Actor 3	Movie 5
Actor 3	Movie 6
\.


--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: rashmiranganathan
--

COPY movie (movie_name, release_date, studio) FROM stdin;
Movie 1	2015-10-01 00:00:00	paramount
Movie 2	2016-10-01 00:00:00	paramount
Movie 3	2016-11-01 00:00:00	paramount
Movie 4	2015-01-01 00:00:00	dreamworks
Movie 5	2016-02-01 00:00:00	dreamworks
Movie 6	2016-03-01 00:00:00	dreamworks
\.


--
-- Name: actor actor_pkey; Type: CONSTRAINT; Schema: public; Owner: rashmiranganathan
--

ALTER TABLE ONLY actor
    ADD CONSTRAINT actor_pkey PRIMARY KEY (actor_name, movie_name);


--
-- Name: movie movie_pkey; Type: CONSTRAINT; Schema: public; Owner: rashmiranganathan
--

ALTER TABLE ONLY movie
    ADD CONSTRAINT movie_pkey PRIMARY KEY (movie_name);


--
-- PostgreSQL database dump complete
--

