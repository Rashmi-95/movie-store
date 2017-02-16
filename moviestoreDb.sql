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


--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: rashmiranganathan
--


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

