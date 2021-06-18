var WIZARD_CONFIG = {
  "title": "Bienvenido",
  "subtitle": "¿Qué tipo de atención necesitás?",
  "color": "#d52b1e",
  "logo": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ1IiB2aWV3Qm94PSIwIDAgMTExIDQ1IiB3aWR0aD0iMTExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bWFzayBpZD0iYSIgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibS4wNTkuMTA1aDE0LjMwNnYyOC4wODdoLTE0LjMwNnoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvbWFzaz48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibS4wOTMuNDU3aDcuNzE4djEyLjAxOGgtNy43MTh6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L21hc2s+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMS4xNTI0OTcxNC41ODQ1NzY0N2MyLjAxMjI3MTQzIDUuMjE1MjM1MjkgNC4zMTUyNTcxNSAxNS43ODg2NDcwMy0xLjA4MDkyODU3IDI3LjQwMjM1MjkzLS4wNjUwMTQyOC4xNTA4ODI0LjEyODQ0Mjg2LjI4MzIzNTMuMzMzLjE1MDg4MjQgNi40NjY1NDI4Ni00LjI0MDU4ODMgMTIuMTA0ODE0MzMtMTIuMzcyMzUzIDEzLjk2MDEwMDAzLTE5LjAxNTQxMTgtNi40Mzc0NzE0Ni0zLjMwMTk0MTE4LTEwLjMxMDMxNDMxLTYuNzExODgyMzUtMTIuNjUyOTQyODktOC44OTk0MTE3Ni0uMzExMzI4NTctLjI5OTY0NzA2LS42OTUwNzE0Mi4wMjgwNTg4Mi0uNTU5MjI4NTcuMzYxNTg4MjMiIGZpbGw9IiNlZTI1MjciIG1hc2s9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwLjM0MyAuNDI0KSIvPjxwYXRoIGQ9Im00Ljk2NzgzMTQzIDM3LjQ3MTVjLTEuODQxNTQyODYtLjYzMjY0NzEtMi4zNzkxLS45MzU0NzA2LTIuMzc5MS0xLjcyMTY0NzEgMC0uNzE3MzUyOS43NzgwNTcxNC0xLjI1NTIzNTMgMS44MDQwMTQyOC0xLjI1NTIzNTMuOTY2MjI4NTggMCAxLjk4NTMxNDI5LjI4Mzc2NDggMy4xMDIxODU3Mi44NjUwNTg5LjAxNzQ0Mjg2LjAxNDgyMzUuMDQxNzU3MTQuMDIwNjQ3LjA2MDc4NTcxLjAyMDY0Ny4wMjQ4NDI4NiAwIC4wNDcwNDI4Ni0uMDA1ODIzNS4wNjY2LS4wMjA2NDcuMDM3NTI4NTctLjAxNjk0MTIuMDYzOTU3MTUtLjA1NDUyOTQuMDc0NTI4NTctLjEwMjcwNTlsLjI5ODExNDI5LTEuOTE3NTI5NGMuMDA2ODcxNDMtLjA2MTQxMTgtLjAyMzc4NTcxLS4xMjI4MjM2LS4wNzk4MTQyOS0uMTQ4MjM1My0xLjAxNzUtLjQ1Nzk0MTItMi4yNDIyLS43MDYyMzUzLTMuNDU3Mzg1NzEtLjcwNjIzNTMtMi4zOTEyNTcxNCAwLTQuMDYzNjU3MTQgMS40NDc5NDEyLTQuMDYzNjU3MTQgMy41MTc5NDEyIDAgMS45MDIxNzY0IDEuMjc3MDI4NTcgMi42OTczNTI5IDMuNzg4MjcxNDMgMy41Nzc3NjQ3IDEuNjY3NjQyODUuNTcwMTc2NCAyLjIxNjgyODU3LjkwOSAyLjIxNjgyODU3IDEuNzkxNTI5NCAwIC44ODYyMzUzLS44MzcyNTcxNSAxLjQ2MTE3NjUtMi4xNDU0NzE0MyAxLjQ2MTE3NjUtMS4wODUxNTcxNCAwLTIuNTU5MzQyODYtLjQwNTUyOTUtMy43NDcwNDI4Ni0xLjAyNDQxMTgtLjAyNDg0Mjg2LS4wMTQ4MjM1LS4wNDI4MTQyOC0uMDIxNzA1OS0uMDY2MDcxNDMtLjAyMTcwNTktLjAyMzc4NTcxIDAtLjA0MjgxNDI4LjAwNjg4MjQtLjA2MTMxNDI4LjAxNzQ3MDYtLjA0MTIyODU3LjAyMzI5NDEtLjA2NzY1NzE1LjA2MTQxMTgtLjA3NTA1NzE1LjEwMTY0NzFsLS4zMDI4NzE0MiAxLjg3Njc2NDdjLS4wMDc5Mjg1OC4wNTkyOTQxLjAyMjIuMTIyMjk0MS4wODI5ODU3MS4xNDgyMzUzIDEuMzU2MzE0MjkuNTcyODIzNSAyLjgwNjE4NTcxLjg4OTk0MTEgNC4wNzQ3NTcxNC44ODk5NDExIDIuNjU0NDg1NzIgMCA0LjQzNTc3MTQzLTEuNDg4MTc2NCA0LjQzNTc3MTQzLTMuNzAwMDU4OCAwLTIuMDAzMjk0MS0xLjI3MjgtMi44MjgxMTc2LTMuNjI3MDU3MTQtMy42NDk3NjQ3bTE1LjYzMDAxNTY3LTQuODI1Njk0MWgtMi4xMDI2NTcxYy0uMDc0NTI4NiAwLS4xMzY5LjA2MjQ3MDYtLjEzNjkuMTM3NjQ3djcuMTMxMTc2NWMwIDEuOTA2OTQxMi0uODk1NCAyLjkxOTcwNTktMi41ODk0NzE0IDIuOTE5NzA1OS0xLjY1Mjg0MjkgMC0yLjU2MzU3MTUtMS4wNTYxNzY1LTIuNTYzNTcxNS0yLjk2ODQxMTh2LTcuMDgyNDcwNmMwLS4wNzUxNzY0LS4wNjIzNzE0LS4xMzc2NDctLjE0MDYtLjEzNzY0N2gtMi4wNzk5Mjg1Yy0uMDc0IDAtLjEzNzQyODYuMDYyNDcwNi0uMTM3NDI4Ni4xMzc2NDd2Ny4xNzUxMTc3YzAgMy4wOTEyMzUzIDEuODMzNjE0MyA0LjkzNjIzNTMgNC44OTg4IDQuOTM2MjM1MyAzLjEyMzg1NzEgMCA0Ljk5NS0xLjg4MjU4ODMgNC45OTUtNS4wMjg4ODI0di03LjA4MjQ3MDZjMC0uMDc1MTc2NC0uMDYyOS0uMTM3NjQ3LS4xNDMyNDI5LS4xMzc2NDdtNy4wMjI0NDE1IDUuNTEyNzY0N2gtMS4zNDA0NTcydi0zLjQ3NzE3NjVoMS4zODc1YzEuMDE0MzI4NiAwIDIuMjE4NDE0My4zMDQ5NDEyIDIuMjE4NDE0MyAxLjczNyAwIDEuMTY4NDExOC0uNzM1NzcxNCAxLjc0MDE3NjUtMi4yNjU0NTcxIDEuNzQwMTc2NW0uMjU3NDE0My01LjUxMjc2NDdoLTMuODE3MzQyOWMtLjA3NCAwLS4xMzEwODU3LjA2MjQ3MDYtLjEzMTA4NTcuMTM3NjQ3djExLjczODY0NzFjMCAuMDcyNTI5NC4wNTcwODU3LjE0MDgyMzUuMTMxMDg1Ny4xNDA4MjM1aDIuMDgyNTcxNGMuMDc1NTg1NyAwIC4xMzY5LS4wNjgyOTQxLjEzNjktLjE0MDgyMzV2LTQuMzU2NTI5NGgxLjM0MDQ1NzJjMi45MTA4NDI4IDAgNC41NzMyLTEuMzgwNzA1OSA0LjU3MzItMy43OTM3NjQ3IDAtMi4yOTg3MDU5LTEuNjUxNzg1Ny0zLjcyNi00LjMxNTc4NTctMy43MjZtMTQuMjEwNjQyOCA5LjkxMTQzNTNoLTUuMjIyMjg1N3YtMy4wODU0MTE4aDQuMzE5NDg1N2MuMDM5MTE0MyAwIC4wNzk4MTQzLS4wMTY5NDEyLjEwNTcxNDMtLjA0MjM1MjkuMDI3NDg1Ny0uMDM0NDExOC4wMzc1Mjg2LS4wNzUxNzY1LjAzMDY1NzEtLjExNDM1M2wtLjI5NzU4NTctMS44MzEyMzUzYy0uMDEzMjE0My0uMDY2MTc2NC0uMDY5NzcxNC0uMTE1NDExNy0uMTQwNi0uMTE1NDExN2gtNC4wMTc2NzE0di0yLjYxNzQxMThoNS4wNjEwNzE0Yy4wNzI5NDI5IDAgLjEzOTAxNDMtLjA1OTgyMzUuMTM5MDE0My0uMTQwODIzNXYtMS44MjY0NzA2YzAtLjA3NTcwNTktLjA2NjA3MTQtLjEzODE3NjUtLjEzOTAxNDMtLjEzODE3NjVoLTcuMjgzMTg1N2MtLjA3Mjk0MjggMC0uMTM3OTU3MS4wNjI0NzA2LS4xMzc5NTcxLjEzODE3NjV2MTEuNzM3MDU4OGMwIC4wNzM1ODgyLjA2NTAxNDMuMTQyOTQxMi4xMzc5NTcxLjE0Mjk0MTJoNy40NDQ0Yy4wNzUwNTcyIDAgLjEzNDI1NzItLjA2OTM1My4xMzQyNTcyLS4xNDI5NDEydi0xLjgyODA1ODhjMC0uMDcyNTI5NC0uMDU5Mi0uMTM1NTI5NC0uMTM0MjU3Mi0uMTM1NTI5NG04LjY0MjE5NTctNi4xMzg5YzAgMS4xNjM2NDctLjc4OTY4NTcgMS44MDQ3NjQ3LTIuMjE4NDE0MyAxLjgwNDc2NDdoLTEuMzg2OTcxNHYtMy40OTMwNTg4aDEuMzg2OTcxNGMxLjAxMjc0MjkgMCAyLjIxODQxNDMuMjkzODIzNSAyLjIxODQxNDMgMS42ODgyOTQxem0tLjAxMDA0MjggMy4zNzg3MDU5YzEuNTI5MTU3MS0uNTkwMjk0MiAyLjM2OC0xLjc5MjU4ODMgMi4zNjgtMy4zOTg4MjM2IDAtMi4zNTMyMzUzLTEuNzAwOTQyOS0zLjc1MjQ3MDYtNC41NTMxMTQzLTMuNzUyNDcwNmgtMy42Mjk3Yy0uMDczNDcxNCAwLS4xMzI2NzE0LjA2MjQ3MDYtLjEzMjY3MTQuMTM4MTc2NXYxMS43MzQ5NDEyYzAgLjA3NTE3NjUuMDU5Mi4xNDQuMTMyNjcxNC4xNDRoMi4wODQxNTcxYy4wNzU1ODU3IDAgLjEzNTMxNDMtLjA2ODgyMzUuMTM1MzE0My0uMTQ0di00LjM5NDY0NzFoMS4wNjQwMTQzbDMuMjMzMjcxNCA0LjYxNzUyOTRjLjAyODU0MjkuMDM5NzA1OS4wNjkyNDI5LjA1NTA1ODkuMTE0Ny4wNTUwNTg5IDAgMCAuMDE5MDI4NiAwIC4wMjU5LS4wMDMxNzY1bDIuMTUzNC0uNDg3NTg4MmMuMDQwNy0uMDA3NDExOC4wNzkyODU3LS4wNDIzNTMuMDk4MzE0My0uMDgzNjQ3MS4wMTYzODU3LS4wNDc2NDcxLjAxMTYyODYtLjA5MTU4ODItLjAxOTAyODYtLjEzMTgyMzV6bTE0Ljk2NzI0LTcuMTM4MzIzNmgtMi4wOTc5Yy0uMDY0NDg1NyAwLS4xMTMxMTQzLjAzNDQxMTgtLjEzMTA4NTcuMDkyMTE3N2wtMy4yOTAzNTcyIDguNzg5Mjk0MS0zLjIyNzk4NTctOC43OTQwNTg4Yy0uMDE3NDQyOS0uMDU3MTc2NS0uMDc2NjQyOS0uMDk3NDExOC0uMTI5NS0uMDk3NDExOGgtMi4yODQ0ODU3Yy0uMDQyODE0My4wMTAwNTg4LS4wNzU1ODU3LjAzMzM1MjktLjA5MjUuMDY5ODgyNC0uMDIzMjU3Mi4wMzY1Mjk0LS4wMjY5NTcyLjA3Njc2NDctLjAxMjE1NzIuMTE1NDExN2w0LjU3MDAyODYgMTEuNzI5NjQ3MWMuMDIyNzI4Ni4wNTE4ODIzLjA2NzEyODYuMDg0NzA1OS4xMjUyNzE0LjA4NDcwNTloMS45Mjg3NTcyYy4wNTY1NTcxIDAgLjEwNjc3MTQtLjAzMjgyMzYuMTI2MzI4Ni0uMDg0NzA1OWw0LjY0MzUtMTEuNzE1MzUzYy4wMTkwMjg1LS4wNDM5NDExLjAxNDgtLjA5MzE3NjQtLjAxMjE1NzItLjEzMTI5NDEtLjAyMzI1NzEtLjAzODY0Ny0uMDcwMy0uMDU4MjM1My0uMTE1NzU3MS0uMDU4MjM1M200LjU0MjkxMjgtLjAxMjkxNzZoLTIuMTAxNmMtLjA3MzQ3MTQgMC0uMTQxNjU3MS4wNjI0NzA2LS4xNDE2NTcxLjEzNzY0N3YxMS43MzgxMTc3YzAgLjA3MzA1ODguMDY4MTg1Ny4xNDEzNTI5LjE0MTY1NzEuMTQxMzUyOWgyLjEwMTZjLjA3ODIyODYgMCAuMTQyNzE0My0uMDY4Mjk0MS4xNDI3MTQzLS4xNDEzNTI5di0xMS43MzgxMTc3YzAtLjA3NTE3NjQtLjA2NDQ4NTctLjEzNzY0Ny0uMTQyNzE0My0uMTM3NjQ3bTExLjUzNjE3NzIgOS45MTE0MzUzaC01LjIyMjI4NTd2LTMuMDg1NDExOGg0LjMyMDU0MjhjLjA0MTc1NzIgMCAuMDc4NzU3Mi0uMDE2OTQxMi4xMDgzNTcyLS4wNDIzNTI5LjAyMzI1NzEtLjAzNDQxMTguMDM1NDE0Mi0uMDc1MTc2NS4wMjc0ODU3LS4xMTQzNTNsLS4zMDE4MTQzLTEuODMxMjM1M2MtLjAwNjg3MTQtLjA2NjE3NjQtLjA2ODcxNDMtLjExNTQxMTctLjEzMTYxNDMtLjExNTQxMTdoLTQuMDIyOTU3MXYtMi42MTc0MTE4aDUuMDU3MzcxNGMuMDc4NzU3MSAwIC4xNDI3MTQzLS4wNTk4MjM1LjE0MjcxNDMtLjE0MDgyMzV2LTEuODI2NDcwNmMwLS4wNzU3MDU5LS4wNjM5NTcyLS4xMzgxNzY1LS4xNDI3MTQzLS4xMzgxNzY1aC03LjI3Njg0MjljLS4wNzQ1Mjg1IDAtLjEzNTMxNDMuMDYyNDcwNi0uMTM1MzE0My4xMzgxNzY1djExLjczNzA1ODhjMCAuMDczNTg4Mi4wNjA3ODU4LjE0Mjk0MTIuMTM1MzE0My4xNDI5NDEyaDcuNDQxNzU3MmMuMDc0IDAgLjE0MDYtLjA2OTM1My4xNDA2LS4xNDI5NDEydi0xLjgyODA1ODhjMC0uMDcyNTI5NC0uMDY2Ni0uMTM1NTI5NC0uMTQwNi0uMTM1NTI5NG0xOS4wMzM3NTE0LjAxNzU3NjRoLTQuMzA2MjcxNHYtOS43OTE0NzA1YzAtLjA3NjIzNTMtLjA2MDc4NTctLjEzNzY0NzEtLjEzMzcyODYtLjEzNzY0NzFoLTIuMDgxNTE0M2MtLjA3NTA1NzEgMC0uMTM2MzcxNC4wNjE0MTE4LS4xMzYzNzE0LjEzNzY0NzF2MTEuNzM4MTE3NmMwIC4wNzMwNTg4LjA2MTMxNDMuMTQwODIzNS4xMzYzNzE0LjE0MDgyMzVoNi44MjA2ODUzYy4wMzQ4ODYgMCAuMDc1NTg2LS4wMTU4ODIzLjEwMjAxNS0uMDUxMzUyOS4wMjY5NTctLjAzMTIzNTMuMDM0ODg1LS4wNzA0MTE4LjAzMzMtLjExMzI5NDFsLS4zMDI4NzItMS44MDU4MjM2Yy0uMDA2ODcxLS4wNjQwNTg4LS4wNjgxODUtLjExNy0uMTMxNjE0LS4xMTciIGZpbGw9IiMyMzFmMjAiLz48cGF0aCBkPSJtNy42NzM5MDU3MSAxMC4zNjgzMTc2aC01LjIzMDc0Mjg1di0zLjA4NTQxMTcyaDQuMzI2ODg1NzFjLjAzNzUyODU3IDAgLjA3OTI4NTcyLS4wMTY5NDExNy4xMDUxODU3Mi0uMDQyMzUyOTQuMDIyNzI4NTctLjAzNDQxMTc2LjAzNzUyODU3LS4wNzUxNzY0Ny4wMzI3NzE0Mi0uMTE0MzUyOTRsLS4zMDYwNDI4NS0xLjgzMTIzNTI5Yy0uMDA3NC0uMDY2MTc2NDctLjA2MjM3MTQzLS4xMTU0MTE3Ny0uMTM2MzcxNDMtLjExNTQxMTc3aC00LjAyMjQyODU3di0yLjYxNzQxMTc2aDUuMDY3OTQyODVjLjA3NCAwIC4xMzg0ODU3Mi0uMDU5ODIzNTMuMTM4NDg1NzItLjE0MDgyMzUzdi0xLjgyNjQ3MDU5YzAtLjA3NTcwNTg4LS4wNjQ0ODU3Mi0uMTM4MTc2NDctLjEzODQ4NTcyLS4xMzgxNzY0N2gtNy4yNzg5NTcxNGMtLjA4MDg3MTQzIDAtLjEzOTU0Mjg2LjA2MjQ3MDU5LS4xMzk1NDI4Ni4xMzgxNzY0N3YxMS43MzcwNTg4NGMwIC4wNzM1ODgyLjA1ODY3MTQzLjE0Mjk0MTIuMTM5NTQyODYuMTQyOTQxMmg3LjQ0MTc1NzE0Yy4wNzQgMCAuMTM2OS0uMDY5MzUzLjEzNjktLjE0Mjk0MTJ2LTEuODI4MDU4OGMwLS4wNzI1Mjk1LS4wNjI5LS4xMzU1Mjk1LS4xMzY5LS4xMzU1Mjk1IiBmaWxsPSIjMjMxZjIwIiBtYXNrPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDMuMDcxIDMyLjE4OSkiLz48cGF0aCBkPSJtMTEwLjYxOTkwNCAxNC43MDM2NzA2Yy01LjM1NzA3MS0uODQ0OTQxMi0xMC41NzI0ODUtMi42MDE1Mjk0LTEzLjk2OTYxNC00LjIyMDQ3MDYtMS45Njg5Mjg2IDUuMTYyODIzNS01Ljc2NTY1NzEgMTAuNjk3ODIzNS05LjczODQgMTQuNTA0ODIzNS0uMjE3MjQyOS4xODQyMzUzLS4wNDQ5Mjg2LjUwNTU4ODMuMzEwOC4yNTcyOTQxIDguNDg3MjcxNC01Ljg4MDE3NjQgMTcuMzMyOTE0LTguNzA0NTg4MiAyMy40MDUxNDMtOS44ODQ2NDcuMzMyNDcxLS4wNzQ2NDcxLjMzNTY0My0uNTY0MzUzLS4wMDc5MjktLjY1NyIgZmlsbD0iIzgyMTY0MiIvPjxwYXRoIGQ9Im05MS42NTUxMzE0IDQyLjU3NDgxNzZoLTQuMjk3ODE0M3YtOS43OTE0NzA1YzAtLjA3NjIzNTMtLjA1ODY3MTQtLjEzNzY0NzEtLjEzODQ4NTctLjEzNzY0NzFoLTIuMDgwNDU3MWMtLjA3MzQ3MTQgMC0uMTMzNzI4Ni4wNjE0MTE4LS4xMzM3Mjg2LjEzNzY0NzF2MTEuNzM4MTE3NmMwIC4wNzMwNTg4LjA2MDI1NzIuMTQwODIzNS4xMzM3Mjg2LjE0MDgyMzVoNi44MTk2Mjg2Yy4wMzc1Mjg1IDAgLjA3OTI4NTctLjAxNTg4MjMuMTA2MjQyOC0uMDUxMzUyOS4wMjQ4NDI5LS4wMzEyMzUzLjAzNTQxNDMtLjA3MDQxMTguMDI5Ni0uMTEzMjk0MWwtLjMwMTgxNDMtMS44MDU4MjM2Yy0uMDEzMjE0My0uMDY0MDU4OC0uMDY3MTI4NS0uMTE3LS4xMzY5LS4xMTciIGZpbGw9IiMyMzFmMjAiLz48L2c+PC9zdmc+",
  "options": [
    {
      "id": "comercial",
      "title": "Comercial",
      "subtitle": "¿Cuál es el motivo de tu visita?",
      "image": "https://placeimg.com/300/200/any?id=comercial",
      "options": [
        {
          "id": "cuentas",
          "title": "Cuentas",
          "image": "https://placeimg.com/300/200/any?id=cuentas",
          "options": [
            {
              "id": "quiero-ser-cliente",
              "title": "Quiero ser cliente del Banco",
              "image": "https://placeimg.com/300/200/any?id=quiero-ser-cliente",
              "type": "html",
              "content": "<div style='text-align: left'><p>¿Sabías que podés abrir una cuenta sin moverte de tu casa?</p><ul><li>Productos 100% bonificados</li><li>Reintegro en la primera compra en la adhesión de débito automático</li><li>Acceso a Club Supervielle  </li></ul><p>¡Y mucho más!</p><p>Completá tus datos <a href='https://hacetecliente.supervielle.com.ar/?_ga=2.139822833.394289028.1598460958-2071073089.1598460958#/paquete' target='_self'>acá</a> y conocé la oferta que tenemos pensada para vos.</p></div>"
            },
            {
              "id": "soy-cliente",
              "title": "Soy cliente y quiero abrir una caja de ahorro y/o cuenta corriente en pesos",
              "image": "https://placeimg.com/300/200/any?id=soy-cliente",
              "type": "html",
              "content": "<div style='text-align: left'><p>Recordá que desde Online Banking podés dar de alta tu cuenta.</p><p>Ingresá <strong>Cuentas &gt; Solicitudes</strong> y solicitá la apertura de:</p><ul><li>Caja de ahorro en Pesos</li><li>Cuenta Corriente en Pesos</li></ul><p><strong>¿No estás registrado en Online Banking?</strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate.</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "consultar-cbu",
              "title": "Consultar mi CBU",
              "image": "https://placeimg.com/300/200/any?id=consultar-cbu",
              "type": "html",
              "content": "<div style='text-align: left'><p>Consultá tu CBU desde Online Banking o App Supervielle<br> Ingresando al menú <strong>Cuentas</strong></p><p><strong>¿No estás registrado en Online Banking? </strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "cerrar-cuenta",
              "title": "Consultar mi CBU",
              "image": "https://placeimg.com/300/200/any?id=cerrar-cuenta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Podés cerrar tu cuenta y tarjetas desde Online Banking.</p><p>Ingresá  <strong>Cuentas &gt;  Solicitudes &gt;  Cierre de Cuenta</strong><br>Una vez hecho, recibirás por mail la confirmación de la operación</p><p><strong>¿No estás registrado en Online Banking?  </strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            }
          ]
        },
        {
          "id": "tarjetas",
          "title": "Tarjetas",
          "image": "https://placeimg.com/300/200/any?id=tarjetas",
          "options": [
            {
              "id": "clave-tarjeta",
              "title": "Realizar la clave de mi tarjeta de débito",
              "image": "https://placeimg.com/300/200/any?id=clave-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>¡Realizar la clave de tu tarjeta es muy fácil!</p><p>Elegí la opción que más te guste, mirá el video y enterate como <strong>generar la clave desde tu casa</strong></p><ul><li><a href='https://www.youtube.com/watch?v=ikm9SsyWq_Y' target='_self'>Desde </a><a href='https://www.youtube.com/watch?v=ikm9SsyWq_Y' target='_self'>App Supervielle</a></li><li><a href='https://www.youtube.com/watch?v=zbtoPAi74A8' target='_self'>Desde Online Banking</a></li><li><a href='https://www.youtube.com/watch?v=7lrEF0QvL98' target='_self'>Desde la Banca telefónica</a></li></ul><p><strong>¿No estás registrado en Online Banking?</strong></p><p>Descargá la App Supervielle desde Play Store o App Store y registrate.</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "reclamo-desconocimiento",
              "title": "Quiero hacer un reclamo por desconocimiento de compra",
              "image": "https://placeimg.com/300/200/any?id=reclamo-desconocimiento",
              "type": "html",
              "content": "<div style='text-align: left'><p>Realizá desde tu casa el <strong>desconocimiento de compra</strong> de tu tarjeta de crédito o tarjeta de débito Supervielle.<p><strong>Para tarjeta de débito:</strong></p><p>Descargá, completá y seguí las instrucciones que se encuentra en el formulario.</p><ul><li><a href='https://content-us-7.content-cms.com/8ba19f21-9a97-4525-8886-f54d823a5cea/dxdam/63/63746634-6cc8-40a3-bbb3-b786990d22a7/Copia%20de%20DDJJ%20TRANSACCIONES%20NO%20RECONOCIDAS%20-%20copia.xlsx' target='_self'>Form-desconocimiento de compra en tarjeta débito Supervielle</a></li></ul><p>Recibirás una confirmación vía email con el número de ticket. En caso de no recibirlo en 72hrs favor comunicarse al 4959-4959 desde la C.A.B.A. y G.B.A, o desde el interior del país al 0810-333-4959.</p><p><strong>Para tarjeta de crédito</strong></p><p>Solo tenés que estar dado de alta en Online Banking.</p><p>Mirá el video y enterate cómo hacerlo.</p><ul><li><a href='https://www.youtube.com/watch?v=o5NECJ2Obf8' target='_self'>Desconocimiento - Visa</a></li><li><a href='https://www.youtube.com/watch?v=-0jxlCzNYKE&amp;t=1s' target='_self'>Desconocimiento - Master</a></li></ul><p><strong>¿No estás registrado en Online Banking o App Supervielle?</strong></p><p>Descargá la APP Supervielle desde Play Store o App Store y registrate.</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "reponer-tarjeta",
              "title": "Reponer mi tarjeta de crédito por deterioro",
              "image": "https://placeimg.com/300/200/any?id=reponer-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Comunicate con la Banca teléfonica de lunes a viernes de 8hs a 20hs y solicitá la reimpresión de tu tarjeta</p><p>CABA y GBA : (011) 4959-4959<br>Interior: 0810 - 333 - 4959</p><p>Marca las siguientes opciones:</p><ol><li><strong>Opción 1 </strong>Productos</li><li>Ingresá tu DNI</li><li>Ingresá tu clave telefónica (si no la tenés o no la  recordás, podrás generarla en el momento)  </li><li><strong>Opción 2</strong> Tarjeta de Crédito</li><li><strong>Opción 1</strong> Visa u <strong>opción 2</strong> Master</li><li><strong>Opción 7 </strong>Otras consultas</li><li><strong>Opción 6</strong> Otras consultas</li></ol></div>"
            },
            {
              "id": "realizar-pago",
              "title": "Realizar el pago de mi tarjeta - Canales de pago",
              "image": "https://placeimg.com/300/200/any?id=realizar-pago",
              "type": "html",
              "content": "<div style='text-align: left'><p>¡Recordá que podés realizar los pagos de tu tarjeta sin necesidad de ir a la sucursal!</p><p>Enterate como:</p><ul><li>Con débito automático en caja de ahorro</li><li>A través de Online Banking o Supervielle Movil </li><li>Desde Pagomiscuentas.com</li><li>En las terminales de autoservicio Supervielle </li><li>En cajeros automáticos </li><li>En Pago Fácil </li></ul><p><strong>¿No estás registrado en Online Banking?</strong><br><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p>Descargá la App Supervielle& nbsp; desde Play Store o App Store y registrate.</p></div>"
            },
            {
              "id": "saldo-tarjeta",
              "title": "Quiero saber el saldo y resumen de mi tarjeta",
              "image": "https://placeimg.com/300/200/any?id=saldo-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Accedé a la información de tu tarjeta desde Online Banking y/o App Supervielle.</p><p>Registrate fácilmente con la <strong>App Supervielle</strong><br><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p><p>Consultá tus movimientos, resúmenes y saldo a pagar.</p><p>Recordá que desde Online Banking podrás adherirte a <strong>Resumen electrónico</strong> para que te llegue todos los meses por mail.</p></div>"
            }
          ]
        },
        {
          "id": "otros-productos",
          "title": "Otros productos",
          "image": "https://placeimg.com/300/200/any?id=otros-productos",
          "options": [
            {
              "id": "prestamo-personal",
              "title": "Quiero solicitar un préstamo personal",
              "image": "https://placeimg.com/300/200/any?id=saldo-tarjeta",
              "type": "html",
              "content": "<div style='text-align: left'><p>Desde Online Banking o App Supervielle ingresá a </p><p><strong>Préstamos  &gt; Solicitudes</strong> y conocé la oferta que tenemos para vos.</p><p><strong>¿No estás registrado en Online Banking? </strong> <br>Descargá la App Supervielle desde Play Store o App Store y registrate</p><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_blank'>Ver tutorial registración</a></p><p>O hacelo desde la <strong>Banca telefónica</strong> de lunes a viernes de 8hs a 20hs.</p><p>CABA y GBA : (011) 4959-4959<br>Interior: 0810 - 333 - 4959</p><ol><li><strong>Opción 1 </strong>Productos</li><li>Ingresá DNI y clave Telefónica </li><li><strong>Opción 7 </strong>Nuevos productos</li><li><strong>Opción 2</strong> Prestamos</li></ol><p><strong>Si no sos cliente:</strong></p><p>Completá tus datos <a href='https://www.supervielle.com.ar/personas/prestamos/personales/solicitar' target='_self'>acá </a>y nos pondremos en contacto con vos.</p></div>"
            },
            {
              "id": "vencimiento-prestamo",
              "title": "Quiero saber el monto y vencimiento de la cuota de mi préstamo",
              "image": "https://placeimg.com/300/200/any?id=vencimiento-prestamo",
              "type": "html",
              "content": "<div style='text-align: left'><p>Desde Online Banking o App Supervielle</p><p>Ingresá al menú <strong>Prestamos </strong>y consultá monto y vencimiento de todas tus cuotas</p><p><strong>¿No estás registrado en Online Banking? </strong> <br> Descargá la App Supervielle desde Play Store o App Store y registrate<br> <a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial registración</a></p></div>"
            },
            {
              "id": "alta-seguro",
              "title": "Quiero dar de alta un Seguro",
              "image": "https://placeimg.com/300/200/any?id=alta-seguro",
              "type": "html",
              "content": "<div style='text-align: left'><p>¿Sabias que por Online Banking podés Cotizar tu Seguro?</p><p>Ingresá al menú Seguros  y consultá por </p><ul><li>Seguro de Tecnologia </li><li>Seguro de Bolso Protegido</li><li>Seguro Contenido de Auto</li></ul><p><strong>¿No estás registrado en Online Banking?  </strong><br> Descargá la App Supervielle desde Play Store o App Store y registrate<br> <a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_blank'>Ver tutorial registración</a></p><p>Nuestros representantes de atención también podrán cotizar tu seguro:</p><p>CABA y GBA : (011) 4959-4959<br>Interior: 0810 - 333 - 4959</p><ol><li><strong>Opción 1</strong> Productos</li><li>Ingresá tu DNI </li><li>Ingresá tu clave telefónica</li><li><strong>Opción 7</strong> Nuevos Productos</li><li><strong>Opción 1 </strong>Seguros</li></ol></div>"
            },
            {
              "id": "plazo-fijo",
              "title": "Quiero constituir un plazo fijo",
              "image": "https://placeimg.com/300/200/any?id=plazo-fijo",
              "type": "html",
              "content": "<div style='text-align: left'><p>Recordá que podés constituir tu Plazo Fijo sin moverte de tu casa desde Online Banking o App Supervielle.</p><ul><li>Ingresá a “<strong>Inversiones  y Plazo Fijos</strong>”</li><li>Seleccioná “<strong>constitución de Plazo fijo</strong>”</li><li>Elegi cuanto querés invertir y a cuánto tiempo.</li></ul><p>También podrás realizar esta operación en App Supervielle desde la opción Plazo fijo</p><p><strong>¿No estás registrado en Online Banking?  </strong><br> Descargá la App Supervielle desde Play Store o App Store y registrate<br> <a href='https://www.youtube.com/watch?v=3xKQQCAcgJI' target='_self'>Ver tutorial registración</a></p></div>"
            }
          ]
        },
        {
          "id": "canales-digitales",
          "title": "Canales digitales y cajeros",
          "image": "https://placeimg.com/300/200/any?id=canales-digitales",
          "options": [
            {
              "id": "generar-clave",
              "title": "¿Cómo genero la clave de Online Banking y App Supervielle?",
              "image": "https://placeimg.com/300/200/any?id=generar-clave",
              "type": "html",
              "content": "<div style='text-align: left'><p>Descargá la <strong>App Supervielle</strong> desde Play Store o App Store y vas a poder habilitar el Reconocimiento Facial para ingresar y autorizar operaciones importantes de una manera ¡más segura! y sin claves.</p><ol><li>Ingresá tu DNI </li><li>Tomá una foto de tu DNI y Rostro</li><li>Generá usuario y clave</li></ol><p><a href='https://www.supervielle.com.ar/personas/servicios-digitales/app-supervielle' target='_self'>Ver tutorial</a></p></div>"
            },
            {
              "id": "olvide-clave",
              "title": "Olvidé o bloqueé la clave de Online banking",
              "image": "https://placeimg.com/300/200/any?id=olvide-clave",
              "type": "html",
              "content": "<div style='text-align: left'><p>Generá nuevamente tu clave sin moverte de tu casa</p><p>Podés hacerlo desde tu Online Banking o con la App Supervielle </p><p><strong>Elegí la opción que más te guste, mira el video y enterate como hacerlo</strong></p><ul><li><a href='https://www.youtube.com/watch?v=qE1j4RavUiA' target='_self'>Olvide o bloqueé mi clave - desde Online Banking</a></li><li><a href='https://www.youtube.com/watch?v=dK0rI7W-PwU' target='_self'>Olvidé o bloqueé mi clave - desde la App Supervielle</a></li></ul></div>"
            },
            {
              "id": "dinero-cajero",
              "title": "¿Cuánto dinero puedo retirar por cajero?",
              "image": "https://placeimg.com/300/200/any?id=dinero-cajero",
              "type": "html",
              "content": "<div style='text-align: left'><p>Recordá que podés retirar por día y en cajeros Banelco de Banco Supervielle hasta $30.000 y en Cash Dispenser  hasta $80.000 solo con tu huella (con previa registración)</p></div>"
            },
            {
              "id": "extraer-dinero",
              "title": "Quiero extraer dinero sin tarjeta de débito",
              "image": "https://placeimg.com/300/200/any?id=extraer-dinero",
              "type": "html",
              "content": "<div style='text-align: left'><p>Generá una orden de extracción desde tu Online Banking para que puedas retirar dinero vos u otra persona desde cualquier cajero automático de la red Banelco o Link</p><p><strong>¡Es muy facil!</strong></p><p>Enterate como hacerlo</p><p><a href='https://www.youtube.com/watch?v=usIOzhIy7wg' target='_self'>Retirar dinero sin tarjeta </a></p></div>"
            }
          ]
        },
        {
          "id": "otro",
          "title": "Otro",
          "image": "https://placeimg.com/300/200/any?id=otro",
          "type": "redirect",
          "content": "https://www.supervielle.com.ar/personas/servicios-digitales/turno-online/modificar"
        }
      ]
    },
    {
      "id": "caja",
      "title": "Caja",
      "image": "https://placeimg.com/300/200/any?id=caja",
      "type": "html",
      "content": "<div style='text-align: left'><h5>Operaciones habilitadas con turno previo</h5><div><p>Recordá que este turno solo te permite realizar las siguientes operaciones:</p><ul><li>Depósitos y extracciones de cuentas en moneda extranjera</li><li>Depósitos de cheques de terceros</li><li>Las personas con discapacidad que se presenten con su certificado único de discapacidad vigente, podrán realizar por caja todo tipo de operación sin ningún tipo de restricción</li></ul></div></div>"
    }
  ]
};
