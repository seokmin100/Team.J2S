#include <stdio.h>
#include <string.h>

int main() {
    char x[25];
    char flag[] = "med1um_rEv3rs1n9_15_v3ry_go0d"; // med1um_rEv3rs1n9_15_v3ry_go0d

    char *y = flag;

    printf("input: ");
    scanf("%s", x);

    if (strcmp(y, x) == 0) {
        printf("Correct\n");
    } else {
        printf("Wrong\n");
    }
}
