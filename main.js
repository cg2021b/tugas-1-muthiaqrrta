function main(){
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices_left = [
      // TUTUP ATAS ABU-ABU
      -0.26, 0.60,  0.5, 0.5, 0.5, //E2
      -0.31, 0.64,  0.5, 0.5, 0.5, //C2
      -0.31, 0.58,  0.5, 0.5, 0.5, //M2

      -0.31, 0.64,  0.5, 0.5, 0.5, //C2
      -0.31, 0.58,  0.5, 0.5, 0.5, //M2
      -0.4, 0.68,  0.5, 0.5, 0.5, //W1

      -0.31, 0.58,  0.5, 0.5, 0.5, //M2
      -0.4, 0.68,  0.5, 0.5, 0.5, //W1
      -0.36, 0.55,  0.5, 0.5, 0.5, //K2

      -0.4, 0.68,  0.5, 0.5, 0.5, //W1
      -0.36, 0.55,  0.5, 0.5, 0.5, //K2
      -0.45, 0.69,  0.5, 0.5, 0.5, //U1

      -0.36, 0.55,  0.5, 0.5, 0.5, //K2
      -0.45, 0.69,  0.5, 0.5, 0.5, //U1
      -0.43, 0.53,  0.5, 0.5, 0.5, //I2

      -0.45, 0.69,  0.5, 0.5, 0.5, //U1
      -0.43, 0.53,  0.5, 0.5, 0.5, //I2
      -0.5, 0.7,  0.5, 0.5, 0.5, //T1

      -0.43, 0.53,  0.5, 0.5, 0.5, //I2
      -0.5, 0.7,  0.5, 0.5, 0.5, //T1
      -0.5, 0.52,  0.5, 0.5, 0.5, //A2

      -0.5, 0.7,  0.5, 0.5, 0.5, //T1
      -0.5, 0.52,  0.5, 0.5, 0.5, //A2
      -0.55, 0.69,  0.5, 0.5, 0.5, //V1

      -0.5, 0.52,  0.5, 0.5, 0.5, //A2
      -0.55, 0.69,  0.5, 0.5, 0.5, //V1
      -0.57, 0.53,  0.5, 0.5, 0.5, //H2

      -0.55, 0.69,  0.5, 0.5, 0.5, //V1
      -0.57, 0.53,  0.5, 0.5, 0.5, //H2
      -0.6, 0.68,  0.5, 0.5, 0.5, //Z1

      -0.57, 0.53,  0.5, 0.5, 0.5, //H2
      -0.6, 0.68,  0.5, 0.5, 0.5, //Z1
      -0.66, 0.56,  0.5, 0.5, 0.5, //J2

      -0.6, 0.68,  0.5, 0.5, 0.5, //Z1
      -0.66, 0.56,  0.5, 0.5, 0.5, //J2
      -0.69, 0.64,  0.5, 0.5, 0.5, //D2

      -0.66, 0.56,  0.5, 0.5, 0.5, //J2
      -0.69, 0.64,  0.5, 0.5, 0.5, //D2
      -0.74, 0.6,  0.5, 0.5, 0.5, //F2

      // TUTUP ATAS UNGU

      -0.20, 0.60,  0.8, 0.20, 0.85, //A
      -0.28, 0.65,  0.8, 0.20, 0.85, //D
      -0.26, 0.60,  0.8, 0.20, 0.85, //E2

      -0.28, 0.65,  0.8, 0.20, 0.85, //D
      -0.26, 0.60,  0.8, 0.20, 0.85, //E2
      -0.31, 0.64,  0.8, 0.20, 0.85, //C2

      -0.28, 0.65,  0.8, 0.20, 0.85, //D
      -0.31, 0.64,  0.8, 0.20, 0.85, //C2
      -0.35, 0.69,  0.8, 0.20, 0.85, //E

      -0.31, 0.64,  0.8, 0.20, 0.85, //C2
      -0.35, 0.69,  0.8, 0.20, 0.85, //E
      -0.4, 0.68,  0.8, 0.20, 0.85, //W1

      -0.35, 0.69,  0.8, 0.20, 0.85, //E
      -0.4, 0.68,  0.8, 0.20, 0.85, //W1
      -0.42, 0.71,  0.8, 0.20, 0.85, //F

      -0.4, 0.68,  0.8, 0.20, 0.85, //W1
      -0.42, 0.71,  0.8, 0.20, 0.85, //F
      -0.45, 0.69,  0.8, 0.20, 0.85, //U1

      -0.42, 0.71,  0.8, 0.20, 0.85, //F
      -0.45, 0.69,  0.8, 0.20, 0.85, //U1
      -0.5, 0.72,  0.8, 0.20, 0.85, //C

      -0.45, 0.69,  0.8, 0.20, 0.85, //U1
      -0.5, 0.72,  0.8, 0.20, 0.85, //C
      -0.5, 0.7,  0.8, 0.20, 0.85, //T1

      -0.5, 0.72,  0.8, 0.20, 0.85, //C
      -0.5, 0.7,  0.8, 0.20, 0.85, //T1
      -0.58, 0.71,  0.8, 0.20, 0.85, //G

      -0.5, 0.7,  0.8, 0.20, 0.85, //T1
      -0.58, 0.71,  0.8, 0.20, 0.85, //G
      -0.55, 0.69,  0.8, 0.20, 0.85, //V1

      -0.58, 0.71,  0.8, 0.20, 0.85, //G
      -0.55, 0.69,  0.8, 0.20, 0.85, //V1
      -0.65, 0.69,  0.8, 0.20, 0.85, //H

      -0.55, 0.69,  0.8, 0.20, 0.85, //V1
      -0.65, 0.69,  0.8, 0.20, 0.85, //H
      -0.6, 0.68,  0.8, 0.20, 0.85, //Z1

      -0.65, 0.69,  0.8, 0.20, 0.85, //H
      -0.6, 0.68,  0.8, 0.20, 0.85, //Z1
      -0.72, 0.65,  0.8, 0.20, 0.85, //I

      -0.6, 0.68,  0.8, 0.20, 0.85, //Z1
      -0.72, 0.65,  0.8, 0.20, 0.85, //I
      -0.69, 0.64,  0.8, 0.20, 0.85, //D2

      -0.72, 0.65,  0.8, 0.20, 0.85, //I
      -0.69, 0.64,  0.8, 0.20, 0.85, //D2
      -0.8, 0.6,  0.8, 0.20, 0.85, //B

      -0.69, 0.64,  0.8, 0.20, 0.85, //D2
      -0.8, 0.6,  0.8, 0.20, 0.85, //B
      -0.74, 0.6,  0.8, 0.20, 0.85, //F2

      -0.8, 0.6,  0.8, 0.20, 0.85, //B
      -0.74, 0.6,  0.8, 0.20, 0.85, //F2
      -0.72, 0.55,  0.8, 0.20, 0.85, //K

      -0.74, 0.6,  0.8, 0.20, 0.85, //F2
      -0.72, 0.55,  0.8, 0.20, 0.85, //K
      -0.66, 0.56,  0.8, 0.20, 0.85, //J2

      -0.72, 0.55,  0.8, 0.20, 0.85, //K
      -0.66, 0.56,  0.8, 0.20, 0.85, //J2
      -0.65, 0.51,  0.8, 0.20, 0.85, //M

      -0.66, 0.56,  0.8, 0.20, 0.85, //J2
      -0.65, 0.51,  0.8, 0.20, 0.85, //M
      -0.57, 0.53,  0.8, 0.20, 0.85, //H2

      -0.65, 0.51,  0.8, 0.20, 0.85, //M
      -0.57, 0.53,  0.8, 0.20, 0.85, //H2
      -0.58, 0.49,  0.8, 0.20, 0.85, //N

      -0.57, 0.53,  0.8, 0.20, 0.85, //H2
      -0.58, 0.49,  0.8, 0.20, 0.85, //N
      -0.5, 0.52,  0.8, 0.20, 0.85, //A2

      -0.58, 0.49,  0.8, 0.20, 0.85, //N
      -0.5, 0.52,  0.8, 0.20, 0.85, //A2
      -0.5, 0.48,  0.8, 0.20, 0.85, //P

      -0.5, 0.52,  0.8, 0.20, 0.85, //A2
      -0.5, 0.48,  0.8, 0.20, 0.85, //P
      -0.43, 0.53,  0.8, 0.20, 0.85, //I2

      -0.5, 0.48,  0.8, 0.20, 0.85, //P
      -0.43, 0.53,  0.8, 0.20, 0.85, //I2
      -0.42, 0.49,  0.8, 0.20, 0.85, //O

      -0.43, 0.53,  0.8, 0.20, 0.85, //I2
      -0.42, 0.49,  0.8, 0.20, 0.85, //O
      -0.36, 0.55,  0.8, 0.20, 0.85, //K2

      -0.42, 0.49,  0.8, 0.20, 0.85, //O
      -0.36, 0.55,  0.8, 0.20, 0.85, //K2
      -0.35, 0.51,  0.8, 0.20, 0.85, //L

      -0.36, 0.55,  0.8, 0.20, 0.85, //K2
      -0.35, 0.51,  0.8, 0.20, 0.85, //L
      -0.31, 0.58,  0.8, 0.20, 0.85, //M2

      -0.35, 0.51,  0.8, 0.20, 0.85, //L
      -0.31, 0.58,  0.8, 0.20, 0.85, //M2
      -0.28, 0.55,  0.8, 0.20, 0.85, //J

      -0.31, 0.58,  0.8, 0.20, 0.85, //M2
      -0.28, 0.55,  0.8, 0.20, 0.85, //J
      -0.26, 0.6,  0.8, 0.20, 0.85, //E2

      -0.28, 0.55,  0.8, 0.20, 0.85, //J
      -0.26, 0.6,  0.8, 0.20, 0.85, //E2
      -0.20, 0.60,  0.8, 0.20, 0.85, //A

      -0.20, 0.60,  0.8, 0.20, 0.85, //A
      -0.28, 0.55,  0.8, 0.20, 0.85, //J
      -0.20, 0.3,  0.8, 0.20, 0.85, //S

      -0.28, 0.55,  0.8, 0.20, 0.85, //J
      -0.20, 0.3,  0.8, 0.20, 0.85, //S
      -0.28, 0.25,  0.8, 0.20, 0.85,//V

      -0.28, 0.55,  0.8, 0.20, 0.85, //J
      -0.35, 0.51,  0.8, 0.20, 0.85, //L
      -0.28, 0.25,  0.8, 0.20, 0.85,//V

      -0.35, 0.51,  0.8, 0.20, 0.85, //L
      -0.28, 0.25,  0.8, 0.20, 0.85,//V
      -0.35, 0.21,  0.8, 0.20, 0.85,//Z

      -0.35, 0.51,  0.8, 0.20, 0.85, //L
      -0.42, 0.49,  0.8, 0.20, 0.85, //O
      -0.35, 0.21,  0.8, 0.20, 0.85,//Z

      -0.42, 0.49,  0.8, 0.20, 0.85, //O
      -0.35, 0.21,  0.8, 0.20, 0.85,//Z
      -0.42, 0.19,  0.8, 0.20, 0.85, //B1

      -0.42, 0.49,  0.8, 0.20, 0.85, //O
      -0.5, 0.48,  0.8, 0.20, 0.85, //P
      -0.42, 0.19,  0.8, 0.20, 0.85, //B1

      -0.5, 0.48,  0.8, 0.20, 0.85, //P
      -0.42, 0.19,  0.8, 0.20, 0.85, //B1
      -0.5, 0.18,  0.8, 0.20, 0.85, //T

      -0.5, 0.48,  0.8, 0.20, 0.85, //P
      -0.5, 0.18,  0.8, 0.20, 0.85, //T
      -0.58, 0.49,  0.8, 0.20, 0.85, //N

      -0.5, 0.18,  0.8, 0.20, 0.85, //T
      -0.58, 0.49,  0.8, 0.20, 0.85, //N
      -0.58, 0.19,  0.8, 0.20, 0.85, //C1

      -0.58, 0.49,  0.8, 0.20, 0.85, //N
      -0.58, 0.18,  0.8, 0.20, 0.85, //C1
      -0.65, 0.51,  0.8, 0.20, 0.85, //M

      -0.58, 0.19,  0.8, 0.20, 0.85, //C1
      -0.65, 0.51,  0.8, 0.20, 0.85, //M
      -0.65, 0.21,  0.8, 0.20, 0.85, //A1

      -0.65, 0.51,  0.8, 0.20, 0.85, //M
      -0.65, 0.21,  0.8, 0.20, 0.85, //A1
      -0.72, 0.55,  0.8, 0.20, 0.85, //K

      -0.65, 0.21,  0.8, 0.20, 0.85, //A1
      -0.72, 0.55,  0.8, 0.20, 0.85, //K
      -0.72, 0.25,  0.8, 0.20, 0.85, //W

      -0.72, 0.55,  0.8, 0.20, 0.85, //K
      -0.72, 0.25,  0.8, 0.20, 0.85, //W
      -0.8, 0.6,  0.8, 0.20, 0.85, //B

      -0.72, 0.25,  0.8, 0.20, 0.85, //W
      -0.8, 0.6,  0.8, 0.20, 0.85, //B
      -0.8, 0.3,  0.8, 0.20, 0.85, //U

      // PEMISAH
      -0.20, 0.3,  0.15, 0.15, 0.15, //S
      -0.28, 0.25, 0.15, 0.15, 0.15,//V
      -0.20, 0.2,  0.15, 0.15, 0.15, //D1

      -0.28, 0.25, 0.15, 0.15, 0.15,//V
      -0.20, 0.2,  0.15, 0.15, 0.15, //D1
      -0.28, 0.15,  0.15, 0.15, 0.15, //E1

      -0.28, 0.25, 0.15, 0.15, 0.15,//V
      -0.28, 0.15,  0.15, 0.15, 0.15, //E1
      -0.35, 0.21,  0.15, 0.15, 0.15,//Z

      -0.28, 0.15,  0.15, 0.15, 0.15, //E1
      -0.35, 0.21,  0.15, 0.15, 0.15,//Z
      -0.35, 0.11,  0.15, 0.15, 0.15, //F1

      -0.35, 0.21,  0.15, 0.15, 0.15,//Z
      -0.35, 0.11,  0.15, 0.15, 0.15, //F1
      -0.42, 0.19,  0.15, 0.15, 0.15, //B1

      -0.35, 0.11,  0.15, 0.15, 0.15, //F1
      -0.42, 0.19,  0.15, 0.15, 0.15, //B1
      -0.42, 0.09,  0.15, 0.15, 0.15, //G1

      -0.42, 0.19,  0.15, 0.15, 0.15, //B1
      -0.42, 0.09,  0.15, 0.15, 0.15, //G1
      -0.5, 0.18,  0.15, 0.15, 0.15, //T

      -0.42, 0.09,  0.15, 0.15, 0.15, //G1
      -0.5, 0.18,  0.15, 0.15, 0.15, //T
      -0.5, 0.08,  0.15, 0.15, 0.15, //H1

      -0.5, 0.18,  0.15, 0.15, 0.15, //T
      -0.5, 0.08,  0.15, 0.15, 0.15, //H1
      -0.58, 0.19,  0.15, 0.15, 0.15, //C1

      -0.5, 0.08,  0.15, 0.15, 0.15, //H1
      -0.58, 0.19,  0.15, 0.15, 0.15, //C1
      -0.58, 0.09,  0.15, 0.15, 0.15, //I1

      -0.58, 0.19,  0.15, 0.15, 0.15, //C1
      -0.58, 0.09,  0.15, 0.15, 0.15, //I1
      -0.65, 0.21,  0.15, 0.15, 0.15, //A1

      -0.58, 0.09,  0.15, 0.15, 0.15, //I1
      -0.65, 0.21,  0.15, 0.15, 0.15, //A1
      -0.62, 0.11,  0.15, 0.15, 0.15, //J1

      -0.65, 0.21,  0.15, 0.15, 0.15, //A1
      -0.62, 0.11,  0.15, 0.15, 0.15, //J1
      -0.72, 0.25,  0.15, 0.15, 0.15, //W

      -0.62, 0.11,  0.15, 0.15, 0.15, //J1
      -0.72, 0.25,  0.15, 0.15, 0.15, //W
      -0.72, 0.15,  0.15, 0.15, 0.15, //K1

      -0.72, 0.25,  0.15, 0.15, 0.15, //W
      -0.72, 0.15,  0.15, 0.15, 0.15, //K1
      -0.8, 0.3,  0.15, 0.15, 0.15, //U

      -0.72, 0.15,  0.15, 0.15, 0.15, //K1
      -0.8, 0.3,  0.15, 0.15, 0.15, //U
      -0.8, 0.2,  0.15, 0.15, 0.15, //L1

      // BADAN BOTOL

      -0.20, 0.2,  0.8, 0.20, 0.85, //D1
      -0.20, -0.8,  0.8, 0.20, 0.85, //Q
      -0.28, 0.15,  0.8, 0.20, 0.85, //E1

      -0.20, -0.8,  0.8, 0.20, 0.85, //Q
      -0.28, 0.15,  0.8, 0.20, 0.85, //E1
      -0.28, -0.86,  0.8, 0.20, 0.85, //P1

      -0.28, 0.15,  0.8, 0.20, 0.85, //E1
      -0.28, -0.86,  0.8, 0.20, 0.85, //P1
      -0.35, 0.11,  0.8, 0.20, 0.85, //F1

      -0.28, -0.86,  0.8, 0.20, 0.85, //P1
      -0.35, 0.11,  0.8, 0.20, 0.85, //F1
      -0.35, -0.89,  0.8, 0.20, 0.85, //R1

      -0.35, 0.11,  0.8, 0.20, 0.85, //F1
      -0.35, -0.89,  0.8, 0.20, 0.85, //R1
      -0.42, 0.09,  0.8, 0.20, 0.85, //G1

      -0.35, -0.89,  0.8, 0.20, 0.85, //R1
      -0.42, 0.09,  0.8, 0.20, 0.85, //G1
      -0.42, -0.92,  0.8, 0.20, 0.85, //M1

      -0.42, 0.09,  0.8, 0.20, 0.85, //G1
      -0.42, -0.92,  0.8, 0.20, 0.85, //M1
      -0.5, 0.08,  0.8, 0.20, 0.85, //H1

      -0.42, -0.92,  0.8, 0.20, 0.85, //M1
      -0.5, 0.08,  0.8, 0.20, 0.85, //H1
      -0.5, -0.94,  0.8, 0.20, 0.85, //N1

      -0.5, 0.08,  0.8, 0.20, 0.85, //H1
      -0.5, -0.94,  0.8, 0.20, 0.85, //N1
      -0.58, 0.09,  0.8, 0.20, 0.85, //I1

      -0.5, -0.94,  0.8, 0.20, 0.85, //N1
      -0.58, 0.09,  0.8, 0.20, 0.85, //I1
      -0.58, -0.92,  0.8, 0.20, 0.85, //O1

      -0.58, 0.09,  0.8, 0.20, 0.85, //I1
      -0.58, -0.92,  0.8, 0.20, 0.85, //O1
      -0.62, 0.11,  0.8, 0.20, 0.85, //J1

      -0.58, -0.92,  0.8, 0.20, 0.85, //O1
      -0.62, 0.11,  0.8, 0.20, 0.85, //J1
      -0.62, -0.9,  0.8, 0.20, 0.85, //S1

      -0.62, 0.11,  0.8, 0.20, 0.85, //J1
      -0.62, -0.9,  0.8, 0.20, 0.85, //S1
      -0.72, 0.15,  0.8, 0.20, 0.85, //K1

      -0.62, -0.9,  0.8, 0.20, 0.85, //S1
      -0.72, 0.15,  0.8, 0.20, 0.85, //K1
      -0.72, -0.86,  0.8, 0.20, 0.85, //Q1

      -0.72, 0.15,  0.8, 0.20, 0.85, //K1
      -0.72, -0.86,  0.8, 0.20, 0.85, //Q1
      -0.8, 0.2,  0.8, 0.20, 0.85, //L1

      -0.72, -0.86,  0.8, 0.20, 0.85, //Q1
      -0.8, 0.2,  0.8, 0.20, 0.85, //L1
      -0.8, -0.8,  0.8, 0.20, 0.85, //R
  ];

  var vertices_right = [
      // TUTUP ATAS ABU-ABU
      0.26, 0.60,  0.5, 0.5, 0.5, //E2
      0.31, 0.64,  0.5, 0.5, 0.5, //C2
      0.31, 0.58,  0.5, 0.5, 0.5, //M2

      0.31, 0.64,  0.5, 0.5, 0.5, //C2
      0.31, 0.58,  0.5, 0.5, 0.5, //M2
      0.4, 0.68,  0.5, 0.5, 0.5, //W1

      0.31, 0.58,  0.5, 0.5, 0.5, //M2
      0.4, 0.68,  0.5, 0.5, 0.5, //W1
      0.36, 0.55,  0.5, 0.5, 0.5, //K2

      0.4, 0.68,  0.5, 0.5, 0.5, //W1
      0.36, 0.55,  0.5, 0.5, 0.5, //K2
      0.45, 0.69,  0.5, 0.5, 0.5, //U1

      0.36, 0.55,  0.5, 0.5, 0.5, //K2
      0.45, 0.69,  0.5, 0.5, 0.5, //U1
      0.43, 0.53,  0.5, 0.5, 0.5, //I2

      0.45, 0.69,  0.5, 0.5, 0.5, //U1
      0.43, 0.53,  0.5, 0.5, 0.5, //I2
      0.5, 0.7,  0.5, 0.5, 0.5, //T1

      0.43, 0.53,  0.5, 0.5, 0.5, //I2
      0.5, 0.7,  0.5, 0.5, 0.5, //T1
      0.5, 0.52,  0.5, 0.5, 0.5, //A2

      0.5, 0.7,  0.5, 0.5, 0.5, //T1
      0.5, 0.52,  0.5, 0.5, 0.5, //A2
      0.55, 0.69,  0.5, 0.5, 0.5, //V1

      0.5, 0.52,  0.5, 0.5, 0.5, //A2
      0.55, 0.69,  0.5, 0.5, 0.5, //V1
      0.57, 0.53,  0.5, 0.5, 0.5, //H2

      0.55, 0.69,  0.5, 0.5, 0.5, //V1
      0.57, 0.53,  0.5, 0.5, 0.5, //H2
      0.6, 0.68,  0.5, 0.5, 0.5, //Z1

      0.57, 0.53,  0.5, 0.5, 0.5, //H2
      0.6, 0.68,  0.5, 0.5, 0.5, //Z1
      0.66, 0.56,  0.5, 0.5, 0.5, //J2

      0.6, 0.68,  0.5, 0.5, 0.5, //Z1
      0.66, 0.56,  0.5, 0.5, 0.5, //J2
      0.69, 0.64,  0.5, 0.5, 0.5, //D2

      0.66, 0.56,  0.5, 0.5, 0.5, //J2
      0.69, 0.64,  0.5, 0.5, 0.5, //D2
      0.74, 0.6,  0.5, 0.5, 0.5, //F2

      // TUTUP ATAS UNGU

      0.20, 0.60,  0.8, 0.20, 0.85, //A
      0.28, 0.65,  0.8, 0.20, 0.85, //D
      0.26, 0.60,  0.8, 0.20, 0.85, //E2

      0.28, 0.65,  0.8, 0.20, 0.85, //D
      0.26, 0.60,  0.8, 0.20, 0.85, //E2
      0.31, 0.64,  0.8, 0.20, 0.85, //C2

      0.28, 0.65,  0.8, 0.20, 0.85, //D
      0.31, 0.64,  0.8, 0.20, 0.85, //C2
      0.35, 0.69,  0.8, 0.20, 0.85, //E

      0.31, 0.64,  0.8, 0.20, 0.85, //C2
      0.35, 0.69,  0.8, 0.20, 0.85, //E
      0.4, 0.68,  0.8, 0.20, 0.85, //W1

      0.35, 0.69,  0.8, 0.20, 0.85, //E
      0.4, 0.68,  0.8, 0.20, 0.85, //W1
      0.42, 0.71,  0.8, 0.20, 0.85, //F

      0.4, 0.68,  0.8, 0.20, 0.85, //W1
      0.42, 0.71,  0.8, 0.20, 0.85, //F
      0.45, 0.69,  0.8, 0.20, 0.85, //U1

      0.42, 0.71,  0.8, 0.20, 0.85, //F
      0.45, 0.69,  0.8, 0.20, 0.85, //U1
      0.5, 0.72,  0.8, 0.20, 0.85, //C

      0.45, 0.69,  0.8, 0.20, 0.85, //U1
      0.5, 0.72,  0.8, 0.20, 0.85, //C
      0.5, 0.7,  0.8, 0.20, 0.85, //T1

      0.5, 0.72,  0.8, 0.20, 0.85, //C
      0.5, 0.7,  0.8, 0.20, 0.85, //T1
      0.58, 0.71,  0.8, 0.20, 0.85, //G

      0.5, 0.7,  0.8, 0.20, 0.85, //T1
      0.58, 0.71,  0.8, 0.20, 0.85, //G
      0.55, 0.69,  0.8, 0.20, 0.85, //V1

      0.58, 0.71,  0.8, 0.20, 0.85, //G
      0.55, 0.69,  0.8, 0.20, 0.85, //V1
      0.65, 0.69,  0.8, 0.20, 0.85, //H

      0.55, 0.69,  0.8, 0.20, 0.85, //V1
      0.65, 0.69,  0.8, 0.20, 0.85, //H
      0.6, 0.68,  0.8, 0.20, 0.85, //Z1

      0.65, 0.69,  0.8, 0.20, 0.85, //H
      0.6, 0.68,  0.8, 0.20, 0.85, //Z1
      0.72, 0.65,  0.8, 0.20, 0.85, //I

      0.6, 0.68,  0.8, 0.20, 0.85, //Z1
      0.72, 0.65,  0.8, 0.20, 0.85, //I
      0.69, 0.64,  0.8, 0.20, 0.85, //D2

      0.72, 0.65,  0.8, 0.20, 0.85, //I
      0.69, 0.64,  0.8, 0.20, 0.85, //D2
      0.8, 0.6,  0.8, 0.20, 0.85, //B

      0.69, 0.64,  0.8, 0.20, 0.85, //D2
      0.8, 0.6,  0.8, 0.20, 0.85, //B
      0.74, 0.6,  0.8, 0.20, 0.85, //F2

      0.8, 0.6,  0.8, 0.20, 0.85, //B
      0.74, 0.6,  0.8, 0.20, 0.85, //F2
      0.72, 0.55,  0.8, 0.20, 0.85, //K

      0.74, 0.6,  0.8, 0.20, 0.85, //F2
      0.72, 0.55,  0.8, 0.20, 0.85, //K
      0.66, 0.56,  0.8, 0.20, 0.85, //J2

      0.72, 0.55,  0.8, 0.20, 0.85, //K
      0.66, 0.56,  0.8, 0.20, 0.85, //J2
      0.65, 0.51,  0.8, 0.20, 0.85, //M

      0.66, 0.56,  0.8, 0.20, 0.85, //J2
      0.65, 0.51,  0.8, 0.20, 0.85, //M
      0.57, 0.53,  0.8, 0.20, 0.85, //H2

      0.65, 0.51,  0.8, 0.20, 0.85, //M
      0.57, 0.53,  0.8, 0.20, 0.85, //H2
      0.58, 0.49,  0.8, 0.20, 0.85, //N

      0.57, 0.53,  0.8, 0.20, 0.85, //H2
      0.58, 0.49,  0.8, 0.20, 0.85, //N
      0.5, 0.52,  0.8, 0.20, 0.85, //A2

      0.58, 0.49,  0.8, 0.20, 0.85, //N
      0.5, 0.52,  0.8, 0.20, 0.85, //A2
      0.5, 0.48,  0.8, 0.20, 0.85, //P

      0.5, 0.52,  0.8, 0.20, 0.85, //A2
      0.5, 0.48,  0.8, 0.20, 0.85, //P
      0.43, 0.53,  0.8, 0.20, 0.85, //I2

      0.5, 0.48,  0.8, 0.20, 0.85, //P
      0.43, 0.53,  0.8, 0.20, 0.85, //I2
      0.42, 0.49,  0.8, 0.20, 0.85, //O

      0.43, 0.53,  0.8, 0.20, 0.85, //I2
      0.42, 0.49,  0.8, 0.20, 0.85, //O
      0.36, 0.55,  0.8, 0.20, 0.85, //K2

      0.42, 0.49,  0.8, 0.20, 0.85, //O
      0.36, 0.55,  0.8, 0.20, 0.85, //K2
      0.35, 0.51,  0.8, 0.20, 0.85, //L

      0.36, 0.55,  0.8, 0.20, 0.85, //K2
      0.35, 0.51,  0.8, 0.20, 0.85, //L
      0.31, 0.58,  0.8, 0.20, 0.85, //M2

      0.35, 0.51,  0.8, 0.20, 0.85, //L
      0.31, 0.58,  0.8, 0.20, 0.85, //M2
      0.28, 0.55,  0.8, 0.20, 0.85, //J

      0.31, 0.58,  0.8, 0.20, 0.85, //M2
      0.28, 0.55,  0.8, 0.20, 0.85, //J
      0.26, 0.6,  0.8, 0.20, 0.85, //E2

      0.28, 0.55,  0.8, 0.20, 0.85, //J
      0.26, 0.6,  0.8, 0.20, 0.85, //E2
      0.20, 0.60,  0.8, 0.20, 0.85, //A

      0.20, 0.60,  0.8, 0.20, 0.85, //A
      0.28, 0.55,  0.8, 0.20, 0.85, //J
      0.20, 0.3,  0.8, 0.20, 0.85, //S

      0.28, 0.55,  0.8, 0.20, 0.85, //J
      0.20, 0.3,  0.8, 0.20, 0.85, //S
      0.28, 0.25,  0.8, 0.20, 0.85,//V

      0.28, 0.55,  0.8, 0.20, 0.85, //J
      0.35, 0.51,  0.8, 0.20, 0.85, //L
      0.28, 0.25,  0.8, 0.20, 0.85,//V

      0.35, 0.51,  0.8, 0.20, 0.85, //L
      0.28, 0.25,  0.8, 0.20, 0.85,//V
      0.35, 0.21,  0.8, 0.20, 0.85,//Z

      0.35, 0.51,  0.8, 0.20, 0.85, //L
      0.42, 0.49,  0.8, 0.20, 0.85, //O
      0.35, 0.21,  0.8, 0.20, 0.85,//Z

      0.42, 0.49,  0.8, 0.20, 0.85, //O
      0.35, 0.21,  0.8, 0.20, 0.85,//Z
      0.42, 0.19,  0.8, 0.20, 0.85, //B1

      0.42, 0.49,  0.8, 0.20, 0.85, //O
      0.5, 0.48,  0.8, 0.20, 0.85, //P
      0.42, 0.19,  0.8, 0.20, 0.85, //B1

      0.5, 0.48,  0.8, 0.20, 0.85, //P
      0.42, 0.19,  0.8, 0.20, 0.85, //B1
      0.5, 0.18,  0.8, 0.20, 0.85, //T

      0.5, 0.48,  0.8, 0.20, 0.85, //P
      0.5, 0.18,  0.8, 0.20, 0.85, //T
      0.58, 0.49,  0.8, 0.20, 0.85, //N

      0.5, 0.18,  0.8, 0.20, 0.85, //T
      0.58, 0.49,  0.8, 0.20, 0.85, //N
      0.58, 0.19,  0.8, 0.20, 0.85, //C1

      0.58, 0.49,  0.8, 0.20, 0.85, //N
      0.58, 0.18,  0.8, 0.20, 0.85, //C1
      0.65, 0.51,  0.8, 0.20, 0.85, //M

      0.58, 0.19,  0.8, 0.20, 0.85, //C1
      0.65, 0.51,  0.8, 0.20, 0.85, //M
      0.65, 0.21,  0.8, 0.20, 0.85, //A1

      0.65, 0.51,  0.8, 0.20, 0.85, //M
      0.65, 0.21,  0.8, 0.20, 0.85, //A1
      0.72, 0.55,  0.8, 0.20, 0.85, //K

      0.65, 0.21,  0.8, 0.20, 0.85, //A1
      0.72, 0.55,  0.8, 0.20, 0.85, //K
      0.72, 0.25,  0.8, 0.20, 0.85, //W

      0.72, 0.55,  0.8, 0.20, 0.85, //K
      0.72, 0.25,  0.8, 0.20, 0.85, //W
      0.8, 0.6,  0.8, 0.20, 0.85, //B

      0.72, 0.25,  0.8, 0.20, 0.85, //W
      0.8, 0.6,  0.8, 0.20, 0.85, //B
      0.8, 0.3,  0.8, 0.20, 0.85, //U


      // PEMISAH
      0.20, 0.3,  0.15, 0.15, 0.15, //S
      0.28, 0.25, 0.15, 0.15, 0.15,//V
      0.20, 0.2,  0.15, 0.15, 0.15, //D1

      0.28, 0.25, 0.15, 0.15, 0.15,//V
      0.20, 0.2,  0.15, 0.15, 0.15, //D1
      0.28, 0.15,  0.15, 0.15, 0.15, //E1

      0.28, 0.25, 0.15, 0.15, 0.15,//V
      0.28, 0.15,  0.15, 0.15, 0.15, //E1
      0.35, 0.21,  0.15, 0.15, 0.15,//Z

      0.28, 0.15,  0.15, 0.15, 0.15, //E1
      0.35, 0.21,  0.15, 0.15, 0.15,//Z
      0.35, 0.11,  0.15, 0.15, 0.15, //F1

      0.35, 0.21,  0.15, 0.15, 0.15,//Z
      0.35, 0.11,  0.15, 0.15, 0.15, //F1
      0.42, 0.19,  0.15, 0.15, 0.15, //B1

      0.35, 0.11,  0.15, 0.15, 0.15, //F1
      0.42, 0.19,  0.15, 0.15, 0.15, //B1
      0.42, 0.09,  0.15, 0.15, 0.15, //G1

      0.42, 0.19,  0.15, 0.15, 0.15, //B1
      0.42, 0.09,  0.15, 0.15, 0.15, //G1
      0.5, 0.18,  0.15, 0.15, 0.15, //T

      0.42, 0.09,  0.15, 0.15, 0.15, //G1
      0.5, 0.18,  0.15, 0.15, 0.15, //T
      0.5, 0.08,  0.15, 0.15, 0.15, //H1

      0.5, 0.18,  0.15, 0.15, 0.15, //T
      0.5, 0.08,  0.15, 0.15, 0.15, //H1
      0.58, 0.19,  0.15, 0.15, 0.15, //C1

      0.5, 0.08,  0.15, 0.15, 0.15, //H1
      0.58, 0.19,  0.15, 0.15, 0.15, //C1
      0.58, 0.09,  0.15, 0.15, 0.15, //I1

      0.58, 0.19,  0.15, 0.15, 0.15, //C1
      0.58, 0.09,  0.15, 0.15, 0.15, //I1
      0.65, 0.21,  0.15, 0.15, 0.15, //A1

      0.58, 0.09,  0.15, 0.15, 0.15, //I1
      0.65, 0.21,  0.15, 0.15, 0.15, //A1
      0.62, 0.11,  0.15, 0.15, 0.15, //J1

      0.65, 0.21,  0.15, 0.15, 0.15, //A1
      0.62, 0.11,  0.15, 0.15, 0.15, //J1
      0.72, 0.25,  0.15, 0.15, 0.15, //W

      0.62, 0.11,  0.15, 0.15, 0.15, //J1
      0.72, 0.25,  0.15, 0.15, 0.15, //W
      0.72, 0.15,  0.15, 0.15, 0.15, //K1

      0.72, 0.25,  0.15, 0.15, 0.15, //W
      0.72, 0.15,  0.15, 0.15, 0.15, //K1
      0.8, 0.3,  0.15, 0.15, 0.15, //U

      0.72, 0.15,  0.15, 0.15, 0.15, //K1
      0.8, 0.3,  0.15, 0.15, 0.15, //U
      0.8, 0.2,  0.15, 0.15, 0.15, //L1

      // BADAN BOTOL

      0.20, 0.2,  0.8, 0.20, 0.85, //D1
      0.20, -0.8,  0.8, 0.20, 0.85, //Q
      0.28, 0.15,  0.8, 0.20, 0.85, //E1

      0.20, -0.8,  0.8, 0.20, 0.85, //Q
      0.28, 0.15,  0.8, 0.20, 0.85, //E1
      0.28, -0.86,  0.8, 0.20, 0.85, //P1

      0.28, 0.15,  0.8, 0.20, 0.85, //E1
      0.28, -0.86,  0.8, 0.20, 0.85, //P1
      0.35, 0.11,  0.8, 0.20, 0.85, //F1

      0.28, -0.86,  0.8, 0.20, 0.85, //P1
      0.35, 0.11,  0.8, 0.20, 0.85, //F1
      0.35, -0.89,  0.8, 0.20, 0.85, //R1

      0.35, 0.11,  0.8, 0.20, 0.85, //F1
      0.35, -0.89,  0.8, 0.20, 0.85, //R1
      0.42, 0.09,  0.8, 0.20, 0.85, //G1

      0.35, -0.89,  0.8, 0.20, 0.85, //R1
      0.42, 0.09,  0.8, 0.20, 0.85, //G1
      0.42, -0.92,  0.8, 0.20, 0.85, //M1

      0.42, 0.09,  0.8, 0.20, 0.85, //G1
      0.42, -0.92,  0.8, 0.20, 0.85, //M1
      0.5, 0.08,  0.8, 0.20, 0.85, //H1

      0.42, -0.92,  0.8, 0.20, 0.85, //M1
      0.5, 0.08,  0.8, 0.20, 0.85, //H1
      0.5, -0.94,  0.8, 0.20, 0.85, //N1

      0.5, 0.08,  0.8, 0.20, 0.85, //H1
      0.5, -0.94,  0.8, 0.20, 0.85, //N1
      0.58, 0.09,  0.8, 0.20, 0.85, //I1

      0.5, -0.94,  0.8, 0.20, 0.85, //N1
      0.58, 0.09,  0.8, 0.20, 0.85, //I1
      0.58, -0.92,  0.8, 0.20, 0.85, //O1

      0.58, 0.09,  0.8, 0.20, 0.85, //I1
      0.58, -0.92,  0.8, 0.20, 0.85, //O1
      0.62, 0.11,  0.8, 0.20, 0.85, //J1

      0.58, -0.92,  0.8, 0.20, 0.85, //O1
      0.62, 0.11,  0.8, 0.20, 0.85, //J1
      0.62, -0.9,  0.8, 0.20, 0.85, //S1

      0.62, 0.11,  0.8, 0.20, 0.85, //J1
      0.62, -0.9,  0.8, 0.20, 0.85, //S1
      0.72, 0.15,  0.8, 0.20, 0.85, //K1

      0.62, -0.9,  0.8, 0.20, 0.85, //S1
      0.72, 0.15,  0.8, 0.20, 0.85, //K1
      0.72, -0.86,  0.8, 0.20, 0.85, //Q1

      0.72, 0.15,  0.8, 0.20, 0.85, //K1
      0.72, -0.86,  0.8, 0.20, 0.85, //Q1
      0.8, 0.2,  0.8, 0.20, 0.85, //L1

      0.72, -0.86,  0.8, 0.20, 0.85, //Q1
      0.8, 0.2,  0.8, 0.20, 0.85, //L1
      0.8, -0.8,  0.8, 0.20, 0.85, //R


  ];

  var vertices = [...vertices_left, ...vertices_right]; 

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying  vec3 vColor;
      uniform mat4 uTranslate;
      void main(){
          gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
          vColor = aColor;
      }
  `;

  var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main(){
          gl_FragColor = vec4(vColor, 1.0);
      }
  `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader,fragmentShaderSource);

  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);

  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  var speed = 0.0019;
  var dy = 0;
  const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
  
  function render() {
      if (dy >= 0.28 || dy <= -0.07) speed = -speed;
  dy += speed;
      
  const left = [
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0, 0.0, 0.0, 1.0,
  ]
  
  const right = [
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0, dy, 0.0, 1.0,
  ]
  
  gl.clearColor(0.9, 0.6, 0.20, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniformMatrix4fv(uTranslate, false, left);
      gl.drawArrays(gl.TRIANGLES, 0, vertices_left.length/5);

  gl.uniformMatrix4fv(uTranslate, false, right);
      gl.drawArrays(gl.TRIANGLES, vertices_left.length/5, vertices_right.length/5);
          
      requestAnimationFrame(render);
  }
  render();
}