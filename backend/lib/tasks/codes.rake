namespace :codes do
  desc "save codes on database"
  task g: :environment do
    codes = JSON.parse(File.read("#{Rails.root}/lib/cif_codes/codes.json"))
    categorias = {"b"=>"Funções do Corpo", "s"=>"Estruturas do Corpo", "d"=>"Atividades e Participação", "e"=>"Fatores Ambientais"}
    total = codes.count 
    cont = 0
    codes.each do |code|
      c = CifCode.new
      c[:code] = code['Categoria']
      c[:description] = code['Descrição']
      c[:type] = categorias[code['Categoria'].first]
      c[:initial] = code['Categoria'].first
      if c.save
          cont+= 1
          p "SALVO #{cont}/#{total}"
      end
    end
  end

end
