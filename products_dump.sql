--
-- PostgreSQL database dump
--

\restrict EVbtJDFeI0T0Zr3D5TRQM0UDrXUxbbJDhTdTWrbTjc889RxzINRNPBZdhc7opUQ

-- Dumped from database version 16.15 (Debian 16.15-1.pgdg13+2)
-- Dumped by pg_dump version 16.15 (Debian 16.15-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: kepa_app
--

COPY public."Product" (id, title, price, "oldPrice", sale, type, occasions, color, size, description, images, "createdAt", "updatedAt") FROM stdin;
cmtbfs0730000trl42tenb74s	Držalo za pisalo	35	\N	f	Darila	{Pomlad}	Brezbarvna	M	Ročno izdelano držalo v obliki violinskega ključa. Ravno pravšnji za darilo ob zaključku glasbene šole ali preprosto za ljubitelje glasbe.	{/assets/products/darila/drzalo_violinski_kljuc.jpg}	2026-08-27 11:25:26.655	2026-08-27 11:25:26.655
cmtbfs08y0001trl4ijoeak34	Viseči uhani s cvetovi - bumerang	17	\N	f	Uhani	{Pomlad}	Bež	M	Lorem Ipsum	{/assets/products/nakit/uhani_bumerang_svetli.jpg}	2026-08-27 11:25:26.722	2026-08-27 11:25:26.722
cmtbfs0970002trl4k11mphky	Viseči uhani s cvetovi - kaplja	17	\N	f	Uhani	{Pomlad}	Bež	M	Lorem Ipsum	{/assets/products/nakit/uhani_kaplja_svetli.jpg}	2026-08-27 11:25:26.731	2026-08-27 11:25:26.731
cmtbfs09e0003trl4yoq6yy82	Viseči uhani s cvetovi - pravokotnik	17	\N	f	Uhani	{Pomlad}	Rjava	M	Lorem Ipsum	{/assets/products/nakit/uhani_pravokotni_temni.jpg}	2026-08-27 11:25:26.738	2026-08-27 11:25:26.738
cmtbfs09l0004trl49rh2xv4j	Viseči uhani s cvetovi - romb	10	17	t	Uhani	{Pomlad}	Rjava	M	Lorem Ipsum	{/assets/products/nakit/uhani_romb_temni.jpg}	2026-08-27 11:25:26.745	2026-08-27 11:25:26.745
cmtbfs09t0005trl4b1loxfxw	Viseči uhani srčki	17	\N	f	Uhani	{Pomlad}	Srebrna	M	Lorem Ipsum	{/assets/products/nakit/uhani_srcki_srebrni.jpg}	2026-08-27 11:25:26.753	2026-08-27 11:25:26.753
cmtbfs0a20006trl4x6pzvxmj	Viseči uhani srčki	17	\N	f	Uhani	{Valentinovo}	Zlata	M	Lorem Ipsum	{/assets/products/nakit/uhani_srcki_zlati.jpg}	2026-08-27 11:25:26.762	2026-08-27 11:25:26.762
cmtbfs0ac0007trl4j6wy8nqo	Izdelek 8	95	110	t	Uhani	{Valentinovo}	Srebrna	M	Lorem Ipsum	{/assets/products/nakit/8.jpg}	2026-08-27 11:25:26.772	2026-08-27 11:25:26.772
\.


--
-- PostgreSQL database dump complete
--

\unrestrict EVbtJDFeI0T0Zr3D5TRQM0UDrXUxbbJDhTdTWrbTjc889RxzINRNPBZdhc7opUQ

