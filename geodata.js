
var nomos = new Array(51);
var prot = new Array(51);
var perif = new Array(51);
var perifs = new Array(9);

nomos[0]='- Ποιος είναι ο Νομός; -'; prot[0]='- Ποια είναι η Πρωτεύουσά του; -'; perif[0]='- Ποιο 

είναι το γεωγραφικό Διαμέρισμα; -';
nomos[1]='Νομός Αττικής'; prot[1]='Αθήνα'; perif[1]='Στερεά Ελλάδα';
nomos[2]='Νομός Ευβοίας'; prot[2]='Χαλκίδα'; perif[2]='Στερεά Ελλάδα';
nomos[3]='Νομός Ευρυτανίας'; prot[3]='Καρπενήσι'; perif[3]='Στερεά Ελλάδα';
nomos[4]='Νομός Φωκίδας'; prot[4]='Αμφισσα'; perif[4]='Στερεά Ελλάδα';
nomos[5]='Νομός Φθιώτιδας'; prot[5]='Λαμία'; perif[5]='Στερεά Ελλάδα';
nomos[6]='Νομός Βοιωτίας'; prot[6]='Λιβαδειά'; perif[6]='Στερεά Ελλάδα';
nomos[46]='Νομός Αιτωλοακαρνανίας'; prot[46]='Μεσολόγγι'; perif[46]='Στερεά Ελλάδα';

nomos[7]='Νομός Χαλκιδικής'; prot[7]='Πολύγυρος'; perif[7]='Μακεδονία';
nomos[8]='Νομός Ημαθίας'; prot[8]='Βέροια'; perif[8]='Μακεδονία';
nomos[9]='Νομός Κιλκίς'; prot[9]='Κιλκίς'; perif[9]='Μακεδονία';
nomos[10]='Νομός Πέλλας'; prot[10]='Εδεσσα'; perif[10]='Μακεδονία';
nomos[11]='Νομός Πιερίας'; prot[11]='Κατερίνη'; perif[11]='Μακεδονία';
nomos[12]='Νομός Σερρών'; prot[12]='Σέρρες'; perif[12]='Μακεδονία';
nomos[13]='Νομός Θεσσαλονίκης'; prot[13]='Θεσσαλονίκη'; perif[13]='Μακεδονία';
nomos[18]='Νομός Δράμας'; prot[18]='Δράμα'; perif[18]='Μακεδονία';
nomos[20]='Νομός Καβάλας'; prot[20]='Καβάλα'; perif[20]='Μακεδονία';

nomos[14]='Νομός Χανίων'; prot[14]='Χανιά'; perif[14]='Κρήτη';
nomos[15]='Νομός Ηρακλείου'; prot[15]='Ηράκλειο'; perif[15]='Κρήτη';
nomos[16]='Νομός Λασιθίου'; prot[16]='Αγιος Νικόλαος'; perif[16]='Κρήτη';
nomos[17]='Νομός Ρεθύμνης'; prot[17]='Ρέθυμνο'; perif[17]='Κρήτη';

nomos[19]='Νομός Εβρου'; prot[19]='Αλεξανδρούπολη'; perif[19]='Θράκη';
nomos[21]='Νομός Ροδόπης'; prot[21]='Κομοτηνή'; perif[21]='Θράκη';
nomos[22]='Νομός Ξάνθης'; prot[22]='Ξάνθη'; perif[22]='Θράκη';

nomos[23]='Νομός Αρτας'; prot[23]='Αρτα'; perif[23]='Ήπειρος';
nomos[24]='Νομός Ιωαννίνων'; prot[24]='Ιωάννινα'; perif[24]='Ήπειρος';
nomos[25]='Νομός Πρέβεζας'; prot[25]='Πρέβεζα'; perif[25]='Ήπειρος';
nomos[26]='Νομός Θεσπρωτίας'; prot[26]='Ηγουμενίτσα'; perif[26]='Ήπειρος';

nomos[27]='Νομός Κέρκυρας'; prot[27]='Κέρκυρα'; perif[27]='Νησιά Iονίου';
nomos[28]='Νομός Κεφαλληνίας'; prot[28]='Αργοστόλι'; perif[28]='Νησιά Iονίου';
nomos[29]='Νομός Λευκάδας'; prot[29]='Λευκάδα'; perif[29]='Νησιά Iονίου';
nomos[30]='Νομός Ζακύνθου'; prot[30]='Ζάκυνθος'; perif[30]='Νησιά Iονίου';

nomos[31]='Νομός Χίου'; prot[31]='Χίος'; perif[31]='Νησιά Αιγαίου';
nomos[32]='Νομός Λέσβου'; prot[32]='Μυτιλήνη'; perif[32]='Νησιά Αιγαίου';
nomos[33]='Νομός Σάμου'; prot[33]='Σάμος'; perif[33]='Νησιά Αιγαίου';
nomos[39]='Νομός Κυκλάδων'; prot[39]='Ερμούπολη'; perif[39]='Νησιά Αιγαίου';
nomos[40]='Νομός Δωδεκανήσου'; prot[40]='Ρόδος'; perif[40]='Νησιά Αιγαίου';

nomos[34]='Νομός Αρκαδίας'; prot[34]='Τρίπολη'; perif[34]='Πελοπόννησος';
nomos[35]='Νομός Αργολίδας'; prot[35]='Ναύπλιο'; perif[35]='Πελοπόννησος';
nomos[36]='Νομός Κορινθίας'; prot[36]='Κόρινθος'; perif[36]='Πελοπόννησος';
nomos[37]='Νομός Λακωνίας'; prot[37]='Σπάρτη'; perif[37]='Πελοπόννησος';
nomos[38]='Νομός Μεσσηνίας'; prot[38]='Καλαμάτα'; perif[38]='Πελοπόννησος';
nomos[45]='Νομός Αχαΐας'; prot[45]='Πάτρα'; perif[45]='Πελοπόννησος';
nomos[47]='Νομός Ηλείας'; prot[47]='Πύργος'; perif[47]='Πελοπόννησος';

nomos[41]='Νομός Καρδίτσας'; prot[41]='Καρδίτσα'; perif[41]='Θεσσαλία';
nomos[42]='Νομός Λάρισας'; prot[42]='Λάρισα'; perif[42]='Θεσσαλία';
nomos[43]='Νομός Μαγνησίας'; prot[43]='Βόλος'; perif[43]='Θεσσαλία';
nomos[44]='Νομός Τρικάλων'; prot[44]='Τρίκαλα'; perif[44]='Θεσσαλία';



nomos[48]='Νομός Φλώρινας'; prot[48]='Φλώρινα'; perif[48]='Μακεδονία';
nomos[49]='Νομός Γρεβενών'; prot[49]='Γρεβενά'; perif[49]='Μακεδονία';
nomos[50]='Νομός Καστοριάς'; prot[50]='Καστοριά'; perif[50]='Μακεδονία';
nomos[51]='Νομός Κοζάνης'; prot[51]='Κοζάνη'; perif[51]='Μακεδονία';

perifs[0]='- Ποιο είναι το Γεωγραφικό Διαμέρισμα; -'
perifs[1]='Ήπειρος';
perifs[2]='Θεσσαλία';
perifs[3]='Θράκη';
perifs[4]='Κρήτη';
perifs[5]='Μακεδονία';
perifs[6]='Νησιά Αιγαίου';
perifs[7]='Νησιά Iονίου';
perifs[8]='Πελοπόννησος';
perifs[9]='Στερεά Ελλάδα';


