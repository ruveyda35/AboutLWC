public with sharing class TerimCreatorLWC {
   
    @AuraEnabled
    public static string TerimCreator(string trmName, string trmAnlam) {
    
        try {
            

            Terimler__c trm = new Terimler__c();
            trm.Terim__c = trmName;
            trm.Terim_Anlam__c = trmAnlam;
            insert trm;

            if(trm.id != null){
                return 'basarili';
            }else { 
                return 'malesef';
            }

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            
        }

    }
}