--
-- PostgreSQL database dump
--

\restrict Op2bYospJLWmif3vudSmv9SaH0TcHhTVNTuk9ay1De5L3JlFDfa8vJsbD3ZHO75

-- Dumped from database version 17.10 (Debian 17.10-1.pgdg13+1)
-- Dumped by pg_dump version 17.10 (Debian 17.10-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: cabins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (1, 'Beautiful cabin', 200, 'cabin1.jpg', 4, 'Forest Retreat', 2500);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (2, 'Scenic mountain cabin', 500, 'cabin2.jpg', 6, 'Mountain View', 3500);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (3, 'Luxury cabin overlooking a peaceful alpine lake with breathtaking sunrise views.', 300, 'cabin3.jpg', 2, 'Lake View Cabin', 2800);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (4, 'Cozy wooden cottage surrounded by pine forests, perfect for couples.', 250, 'cabin4.jpg', 3, 'Pine Woods Cottage', 2400);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (5, 'Modern cabin featuring panoramic sunset views and a private outdoor deck.', 400, 'cabin5.jpg', 5, 'Sunset Ridge', 4200);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (6, 'Spacious luxury lodge located near snowy mountain peaks with a fireplace.', 600, 'cabin6.jpg', 8, 'Snow Peak Lodge', 6500);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (7, 'Relax beside a crystal-clear river with a private hot tub and nature trails.', 350, 'cabin7.jpg', 4, 'River Stone Cabin', 3300);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (8, 'Peaceful getaway surrounded by lush greenery and scenic hiking routes.', 500, 'cabin8.jpg', 6, 'Hidden Valley Retreat', 4800);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (9, 'Rustic cedar cabin with modern interiors and forest views.', 300, 'cabin9.jpg', 2, 'Cedar Haven', 2600);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (10, 'Luxury family lodge offering mountain vistas and spacious living areas.', 700, 'cabin10.jpg', 10, 'Eagle Nest Lodge', 7200);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (11, 'Romantic chalet featuring glass walls for breathtaking night sky views.', 450, 'cabin11.jpg', 2, 'Moonlight Chalet', 3900);
INSERT INTO public.cabins (id, description, discount, image, max_capacity, name, regular_price) VALUES (12, 'Premium forest cabin with outdoor fireplace and nature-inspired interiors.', 550, 'cabin12.jpg', 6, 'Whispering Pines', 5100);


--
-- Data for Name: guests; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.guests (id, full_name, email, nationality, country_flag, national_id, created_at) VALUES (2, 'Alice Smith', 'alice@example.com', 'United States', 'US', 'US987654', '2026-06-25 16:22:58.446652');
INSERT INTO public.guests (id, full_name, email, nationality, country_flag, national_id, created_at) VALUES (1, 'John Doe', 'john@example.com', 'United States', 'US', 'USA23456', '2026-06-25 16:22:58.446652');


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.bookings (id, cabin_price, end_date, extras_price, has_breakfast, is_paid, num_guests, num_nights, observations, start_date, total_price, cabin_id, guest_id, status) VALUES (9, 9000, '2026-10-15', 1200, true, true, 3, 3, 'Anniversary celebration', '2026-10-12', 10200, 1, 2, 'CHECKED_IN');
INSERT INTO public.bookings (id, cabin_price, end_date, extras_price, has_breakfast, is_paid, num_guests, num_nights, observations, start_date, total_price, cabin_id, guest_id, status) VALUES (10, 15000, '2026-11-09', 0, false, false, 5, 5, 'Corporate team outing', '2026-11-04', 15000, 2, 1, 'UNCONFIRMED');
INSERT INTO public.bookings (id, cabin_price, end_date, extras_price, has_breakfast, is_paid, num_guests, num_nights, observations, start_date, total_price, cabin_id, guest_id, status) VALUES (7, 12000, '2026-08-10', 0, false, true, 1, 4, 'Me Time', '2026-08-06', 12000, 2, 2, 'UNCONFIRMED');
INSERT INTO public.bookings (id, cabin_price, end_date, extras_price, has_breakfast, is_paid, num_guests, num_nights, observations, start_date, total_price, cabin_id, guest_id, status) VALUES (8, 5400, '2026-09-04', 400, true, false, 2, 2, 'Awaiting payment confirmation', '2026-09-02', 5800, 1, 1, 'CHECKED_OUT');


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.countries (id, name, code, flag) VALUES (1, 'India', 'IN', '🇮🇳');
INSERT INTO public.countries (id, name, code, flag) VALUES (2, 'United States', 'US', '🇺🇸');
INSERT INTO public.countries (id, name, code, flag) VALUES (3, 'Australia', 'AU', '🇦🇺');
INSERT INTO public.countries (id, name, code, flag) VALUES (4, 'Canada', 'CA', '🇨🇦');
INSERT INTO public.countries (id, name, code, flag) VALUES (5, 'Japan', 'JP', '🇯🇵');


--
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bookings_id_seq', 16, true);


--
-- Name: cabins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabins_id_seq', 12, true);


--
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_id_seq', 5, true);


--
-- Name: guests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.guests_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

\unrestrict Op2bYospJLWmif3vudSmv9SaH0TcHhTVNTuk9ay1De5L3JlFDfa8vJsbD3ZHO75

