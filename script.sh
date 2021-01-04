if [ $# -eq 0 ]
    then
        export time="30"
    else
        export time=$1
fi

timeout $time sudo tcpdump -i lo -s 1500 port 8000 | tee -a mesures.txt

cat mesures.txt | rev | cut -d ' ' -f1 | tee -a mesures_taille.txt
rm mesures.txt
sed -i '$ d' mesures_taille.txt
awk '{ sum += $1 } END { print sum }' mesures_taille.txt | tee -a mesures_taille_requetes.txt
rm mesures_taille.txt