CREATE TABLE IF NOT EXISTS pre_infra_p (id integer primary key,
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
laminar	INTEGER(1),
surcos	INTEGER(1),
carcavas	INTEGER(1),
socavacion	INTEGER(1),
erosivos_ninguno	INTEGER(1),
caidas	INTEGER(1),
deslizamientos	INTEGER(1),
volcamiento	INTEGER(1),
flujos	INTEGER(1),
mov_ninguno	INTEGER(1),
topografia	VARCHAR(50),
tiempo_construccion	VARCHAR(20),
elemento	VARCHAR(20),
ancho	VARCHAR(20),
largo	VARCHAR(20),
altura	VARCHAR(20),
forma	VARCHAR(20),
profundidad	VARCHAR(20),
socavamiento	INTEGER(1),
erosion	INTEGER(1),
desprendimientos	INTEGER(1),
volcamientos	INTEGER(1),
cizallamiento	INTEGER(1),
caudal_permanente	INTEGER(1),
caudal_intermitente	INTEGER(1),
caudal_efimero	INTEGER(1),
caudal_otro	INTEGER(1),
trafico_pesado	INTEGER(1),
trafico_liviano	INTEGER(1),
trafico_otro	VARCHAR(20),
revestimiento_e_m	VARCHAR(2),
revestimiento_e_e	VARCHAR(2),
revestimiento_e_c	VARCHAR(2),
revestimiento_m_m	VARCHAR(2),
revestimiento_m_e	VARCHAR(2),
revestimiento_m_c	VARCHAR(2),
compuerta_e_m	VARCHAR(2),
compuerta_e_e	VARCHAR(2),
compuerta_e_c	VARCHAR(2),
compuerta_m_m	VARCHAR(2),
compuerta_m_e	VARCHAR(2),
compuerta_m_c	VARCHAR(2),
columna_e_m	VARCHAR(2),
columna_e_e	VARCHAR(2),
columna_e_c	VARCHAR(2),
columna_m_m	VARCHAR(2),
columna_m_e	VARCHAR(2),
columna_m_c	VARCHAR(2),
caja_entrada_e_m	VARCHAR(2),
caja_entrada_e_e	VARCHAR(2),
caja_entrada_e_c	VARCHAR(2),
caja_entrada_m_m	VARCHAR(2),
caja_entrada_m_e	VARCHAR(2),
caja_entrada_m_c	VARCHAR(2),
caja_salida_e_m	VARCHAR(2),
caja_salida_e_e	VARCHAR(2),
caja_salida_e_c	VARCHAR(2),
caja_salida_m_m	VARCHAR(2),
caja_salida_m_e	VARCHAR(2),
caja_salida_m_c	VARCHAR(2),
losa_e_m	VARCHAR(2),
losa_e_e	VARCHAR(2),
losa_e_c	VARCHAR(2),
losa_m_m	VARCHAR(2),
losa_m_e	VARCHAR(2),
losa_m_c	VARCHAR(2),
torre_e_m	VARCHAR(2),
torre_e_e	VARCHAR(2),
torre_e_c	VARCHAR(2),
torre_m_m	VARCHAR(2),
torre_m_e	VARCHAR(2),
torre_m_c	VARCHAR(2),
cerramiento_e_m	VARCHAR(2),
cerramiento_e_e	VARCHAR(2),
cerramiento_e_c	VARCHAR(2),
cerramiento_m_m	VARCHAR(2),
cerramiento_m_e	VARCHAR(2),
cerramiento_m_c	VARCHAR(2),
muro_e_m	VARCHAR(2),
muro_e_e	VARCHAR(2),
muro_e_c	VARCHAR(2),
muro_m_m	VARCHAR(2),
muro_m_e	VARCHAR(2),
muro_m_c	VARCHAR(2),
gavion_e_m	VARCHAR(2),
gavion_e_e	VARCHAR(2),
gavion_e_c	VARCHAR(2),
gavion_m_m	VARCHAR(2),
gavion_m_e	VARCHAR(2),
gavion_m_c	VARCHAR(2),
pilotes_e_m	VARCHAR(2),
pilotes_e_e	VARCHAR(2),
pilotes_e_c	VARCHAR(2),
pilotes_m_m	VARCHAR(2),
pilotes_m_e	VARCHAR(2),
pilotes_m_c	VARCHAR(2),
captacion_sumergida_e_m	VARCHAR(2),
captacion_sumergida_e_e	VARCHAR(2),
captacion_sumergida_e_c	VARCHAR(2),
captacion_sumergida_m_m	VARCHAR(2),
captacion_sumergida_m_e	VARCHAR(2),
captacion_sumergida_m_c	VARCHAR(2),
rejilla_e_m	VARCHAR(2),
rejilla_e_e	VARCHAR(2),
rejilla_e_c	VARCHAR(2),
rejilla_m_m	VARCHAR(2),
rejilla_m_e	VARCHAR(2),
rejilla_m_c	VARCHAR(2),
conducccion_e_m	VARCHAR(2),
conducccion_e_e	VARCHAR(2),
conducccion_e_c	VARCHAR(2),
conducccion_m_m	VARCHAR(2),
conducccion_m_e	VARCHAR(2),
conducccion_m_c	VARCHAR(2),
desarenador_e_m	VARCHAR(2),
desarenador_e_e	VARCHAR(2),
desarenador_e_c	VARCHAR(2),
desarenador_m_m	VARCHAR(2),
desarenador_m_e	VARCHAR(2),
desarenador_m_c	VARCHAR(2),
tanque_desarenador_e_m	VARCHAR(2),
tanque_desarenador_e_e	VARCHAR(2),
tanque_desarenador_e_c	VARCHAR(2),
tanque_desarenador_m_m	VARCHAR(2),
tanque_desarenador_m_e	VARCHAR(2),
tanque_desarenador_m_c	VARCHAR(2),
conduccion_desarenador_e_m	VARCHAR(2),
conduccion_desarenador_e_e	VARCHAR(2),
conduccion_desarenador_e_c	VARCHAR(2),
conduccion_desarenador_m_m	VARCHAR(2),
conduccion_desarenador_m_e	VARCHAR(2),
conduccion_desarenador_m_c	VARCHAR(2),
tanque_almacenamiento_e_m	VARCHAR(2),
tanque_almacenamiento_e_e	VARCHAR(2),
tanque_almacenamiento_e_c	VARCHAR(2),
tanque_almacenamiento_m_m	VARCHAR(2),
tanque_almacenamiento_m_e	VARCHAR(2),
tanque_almacenamiento_m_c	VARCHAR(2),
conduccion_almacenamiento_e_m	VARCHAR(2),
conduccion_almacenamiento_e_e	VARCHAR(2),
conduccion_almacenamiento_e_c	VARCHAR(2),
conduccion_almacenamiento_m_m	VARCHAR(2),
conduccion_almacenamiento_m_e	VARCHAR(2),
conduccion_almacenamiento_m_c	VARCHAR(2),
tanque_distribucion_e_m	VARCHAR(2),
tanque_distribucion_e_e	VARCHAR(2),
tanque_distribucion_e_c	VARCHAR(2),
tanque_distribucion_m_m	VARCHAR(2),
tanque_distribucion_m_e	VARCHAR(2),
tanque_distribucion_m_c	VARCHAR(2),
tuberia_distribucion_e_m	VARCHAR(2),
tuberia_distribucion_e_e	VARCHAR(2),
tuberia_distribucion_e_c	VARCHAR(2),
tuberia_distribucion_m_m	VARCHAR(2),
tuberia_distribucion_m_e	VARCHAR(2),
tuberia_distribucion_m_c	VARCHAR(2),
valvula_control_e_m	VARCHAR(2),
valvula_control_e_e	VARCHAR(2),
valvula_control_e_c	VARCHAR(2),
valvula_control_m_m	VARCHAR(2),
valvula_control_m_e	VARCHAR(2),
valvula_control_m_c	VARCHAR(2),
otro1_e_m	VARCHAR(2),
otro1_e_e	VARCHAR(2),
otro1_e_c	VARCHAR(2),
otro1_m_m	VARCHAR(2),
otro1_m_e	VARCHAR(2),
otro1_m_c	VARCHAR(2),
otro2_e_m	VARCHAR(2),
otro2_e_e	VARCHAR(2),
otro2_e_c	VARCHAR(2),
otro2_m_m	VARCHAR(2),
otro2_m_e	VARCHAR(2),
otro2_m_c	VARCHAR(2),
otro3_e_m	VARCHAR(2),
otro3_e_e	VARCHAR(2),
otro3_e_c	VARCHAR(2),
otro3_m_m	VARCHAR(2),
otro3_m_e	VARCHAR(2),
otro3_m_c	VARCHAR(2),
otro4_e_m	VARCHAR(2),
otro4_e_e	VARCHAR(2),
otro4_e_c	VARCHAR(2),
otro4_m_m	VARCHAR(2),
otro4_m_e	VARCHAR(2),
otro4_m_c	VARCHAR(2),
otro5_e_m	VARCHAR(2),
otro5_e_e	VARCHAR(2),
otro5_e_c	VARCHAR(2),
otro5_m_m	VARCHAR(2),
otro5_m_e	VARCHAR(2),
otro5_m_c	VARCHAR(2),
otro1_nombre	VARCHAR(50),
otro2_nombre	VARCHAR(50),
otro3_nombre	VARCHAR(50),
otro4_nombre	VARCHAR(50),
otro5_nombre	VARCHAR(50),
observa	VARCHAR(2000),
rela_repre_prop	VARCHAR(50),
constru_si	INTEGER(1),
falta_rela	VARCHAR(250));