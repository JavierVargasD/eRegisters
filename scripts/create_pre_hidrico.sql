CREATE TABLE IF NOT EXISTS pre_hidrico_p (id integer primary key,
acta	VARCHAR(12),
permiso	VARCHAR(25),
P_DEPTO	VARCHAR(20),
P_MUN	VARCHAR(20),
vereda	VARCHAR(50),
predio	VARCHAR(50),
propietario	VARCHAR(100),
cc_propietario	VARCHAR(20),
lugar_cc_propietario	VARCHAR(50),
telefono	 VARCHAR(20),
origen_coord	VARCHAR(20),
coordenada_e	VARCHAR(20),
coordenada_n	VARCHAR(20),
stk	VARCHAR(20),
sp_cercano	VARCHAR(50),
distancia_sp	VARCHAR(12),
productivo	INTEGER(1),
reserva	INTEGER(1),
abandonado	INTEGER(1),
inactivo	INTEGER(1),
sellado	INTEGER(1),
monitoreo	INTEGER(1),
en_campo	INTEGER(1),
constructor	INTEGER(1),
propietario_i	INTEGER(1),
estudios	INTEGER(1),
reportes	INTEGER(1),
otros	VARCHAR(50),
jagüey	INTEGER(1),
estanque_piscicola	INTEGER(1),
aljibe	INTEGER(1),
pozo_profundo	INTEGER(1),
nacedero	INTEGER(1),
info_nombre	VARCHAR(250),
info_direccion	VARCHAR(250),
info_telefono	VARCHAR(50),
punto_legalizado	INTEGER(1),
punto_resolucion	VARCHAR(50),
punto_fecha	VARCHAR(20),
punto_caudal	VARCHAR(20),
invierno	INTEGER(1),
verano	INTEGER(1),
comienzo_invierno	INTEGER(1),
comienzo_verano	INTEGER(1),
ultima_lluvia	VARCHAR(20),
gps	INTEGER(1),
nivelacion	INTEGER(1),
mapa	INTEGER(1),
domestico	INTEGER(1),
comunitario	INTEGER(1),
ganadero_sp	VARCHAR(20),
agricola_tipo	VARCHAR(20),
ganadero_n	VARCHAR(20),
agricola_ha	VARCHAR(20),
industrial	INTEGER(1),
piscicola	INTEGER(1),
ninguno	INTEGER(1),
agua_otro	VARCHAR(50),
cementerio	INTEGER(1),
basura_estiercol	INTEGER(1),
aguas_estancadas	INTEGER(1),
pozo_abandonado	INTEGER(1),
residuos_solidos	INTEGER(1),
residuos_peligrosos	INTEGER(1),
plantas_sacrificio	INTEGER(1),
lagunas_oxidacion	INTEGER(1),
contamina_otro	VARCHAR(50),
tipo_suelo	VARCHAR(50),
tipo_vegetacion	VARCHAR(50),
aporte_agua_permanente	INTEGER(1),
aporte_agua_intermitente	INTEGER(1),
aporte_agua_lluvias	VARCHAR(20),
epoca_disminucion	VARCHAR(20),
espejoa_si	INTEGER(1),
otro_descp	VARCHAR(50),
espejo_ancho	VARCHAR(20),
espejo_largo	VARCHAR(20),
espejo_profundidad	VARCHAR(20),
espejo_coloracion	VARCHAR(20),
manguera_gravedad	INTEGER(1),
manguera_bombeo	INTEGER(1),
canal_tierra	INTEGER(1),
canal_cemento	INTEGER(1),
drenaje_natural	INTEGER(1),
subterraneo	INTEGER(1),
agua_lluvias	INTEGER(1),
aguas_otro	VARCHAR(50),
capta_manual	INTEGER(1),
bomba_sumergible	INTEGER(1),
bomba_natural	INTEGER(1),
electrobomba	INTEGER(1),
moto_bomba	INTEGER(1),
represa	INTEGER(1),
molino_viento	INTEGER(1),
capta_otro	VARCHAR(50),
bomba_clase	VARCHAR(50),
bomba_modelo	VARCHAR(50),
bomba_potencia	VARCHAR(20),
bomba_profundidad	VARCHAR(20),
tuberiad_diametro	VARCHAR(20),
tuberiad_longitud	VARCHAR(20),
tuberiad_material	VARCHAR(50),
manantial_goteo	INTEGER(1),
manantial_filtracion	INTEGER(1),
manantial_otro	VARCHAR(50),
perma_perenne	INTEGER(1),
perma_estacional	INTEGER(1),
perma_intermitente	INTEGER(1),
perma_sininfo	INTEGER(1),
surgencia_kastico	INTEGER(1),
surgencia_fracturas	INTEGER(1),
surgencia_contacto	INTEGER(1),
surgencia_otro	VARCHAR(50),
pozo_fecha	VARCHAR(20),
pozo_profundidad	VARCHAR(20),
pozo_diametro	VARCHAR(20),
pozo_diametrop	VARCHAR(20),
pozo_caudal	VARCHAR(20),
pozo_proteccion	VARCHAR(20),
material_concreto	INTEGER(1),
material_bloque	INTEGER(1),
material_pvc	INTEGER(1),
material_metalico	INTEGER(1),
material_otro	VARCHAR(20),
jaguey_profundidad	VARCHAR(20),
jaguey_diametro	VARCHAR(20),
dique_si	INTEGER(1),
dique_estado	VARCHAR(50),
malla_si	INTEGER(1),
jaguey_especies	VARCHAR(50),
jaguey_cant_peces	VARCHAR(20),
jaguey_cant_max	VARCHAR(20),
jaguey_tamano	VARCHAR(20),
jaguey_comercial	VARCHAR(20),
jaguey_familiar	VARCHAR(20),
jaguey_zona_proteccion	VARCHAR(20),
ph	VARCHAR(20),
conductividad	VARCHAR(20),
temperatura	VARCHAR(20),
sdt	VARCHAR(20),
muestreo_manual	INTEGER(1),
muestreo_bombeo	INTEGER(1),
muestreo_otro	VARCHAR(50),
color_incoloro	INTEGER(1),
color_amarillo	INTEGER(1),
color_cafe	INTEGER(1),
color_otro	VARCHAR(20),
apariencia_clara	INTEGER(1),
apariencia_turbia	INTEGER(1),
apariencia_otro	VARCHAR(20),
olor_inolora	INTEGER(1),
olor_fetida	INTEGER(1),
olor_otro	VARCHAR(20),
topo_depresion	INTEGER(1),
topo_planicie	INTEGER(1),
topo_altiplanicie	INTEGER(1),
topo_piedemonte	INTEGER(1),
topo_ladera	INTEGER(1),
topo_colina	INTEGER(1),
topo_otro	VARCHAR(20),
geo_abanico_aluvial	INTEGER(1),
geo_cauce_aluvial	INTEGER(1),
geo_llanura_aluvial	INTEGER(1),
geo_terraza	INTEGER(1),
geo_luna	INTEGER(1),
geo_dolina	INTEGER(1),
geo_playa	INTEGER(1),
geo_otro	VARCHAR(20),
unidad_geologica1	VARCHAR(250),
litologia1	VARCHAR(250),
embalse_diametro	VARCHAR(20),
embalse_largo	VARCHAR(20),
embalse_ancho	VARCHAR(20),
embalse_profundidad	VARCHAR(20),
embalse_capacidad	VARCHAR(20),
tanque_diametro	VARCHAR(20),
tanque_largo	VARCHAR(20),
tanque_ancho	VARCHAR(20),
tanque_profundidad	VARCHAR(20),
tanque_capacidad	VARCHAR(20),
alberca_diametro	VARCHAR(20),
alberca_largo	VARCHAR(20),
alberca_ancho	VARCHAR(20),
alberca_profundidad	VARCHAR(20),
alberca_capacidad	VARCHAR(20),
tuberia_diametro	VARCHAR(20),
tuberia_largo	VARCHAR(20),
tuberia_ancho	VARCHAR(20),
tuberia_profundidad	VARCHAR(20),
tuberia_capacidad	VARCHAR(20),
otro_nombre	VARCHAR(50),
otro_diametro	VARCHAR(20),
otro_largo	VARCHAR(20),
otro_ancho	VARCHAR(20),
otro_profundidad	VARCHAR(20),
otro_capacidad	VARCHAR(20),
observa	VARCHAR(2000),
rela_repre_prop	VARCHAR(50),
elementos_si	INTEGER(1),
falta_rela	VARCHAR(250));