##
# Essa classe é utilizada para instanciar o gráfico de barra
class Graph::BarChart::Init
    def self.structure
        ##
        # city_hash armazena o resultado final, por cidade.
        city_hash = {}
        ##
        # Contabilizar os tipos de deficiencias de acordo com as avaliações
        # que já foram feitas
        Evaluation.each do |ev|
            hc_city = to_upcase(ev.disabled_person.health_center.address.city)
            hc_state = to_upcase(ev.disabled_person.health_center.address.state)
            ev_type = to_upcase(ev.disabled_type)
            ##
            # Criação da chaves e valores da cidade no city_hash
            if city_hash.has_key?(hc_city)
                if city_hash[hc_city][:types].has_key?(ev_type)
                    city_hash[hc_city][:types][ev_type] +=1 unless ev_type.nil?
                else
                    city_hash[hc_city][:types][ev_type] = 1 unless ev_type.nil?
                end
            else
                city_hash[hc_city] = {:state => hc_state, :types => {ev_type => 1} } unless ev_type.nil?
            end
        end

        ##
        # Deletar gráficos gerados anteriormente para atualizar os dados
        Graph.destroy_all
        ##
        # Gerar novos gráficos 
        init_graphs(city_hash)
        
    end

    ##
    # Gerar novos gráficos com os dados armazenados na variavel city_hash
    def self.init_graphs(city_hash)
        city_hash.each do |city, val|
            data = {
            "AUDITIVA" => 0,
            "FÍSICA" => 0,
            "INTELECTUAL" => 0,
            "MULTIPLAS DEFICIÊNCIAS" => 0,
            "OSTOMIA" => 0,
            "VISUAL" => 0,
        }
            val[:types].each do |type, quantity|
                # data << {type: type, quantity: quantity }
                data[type] = quantity
            end
            # data = [data['FISICA'] unless data['FISICA'], ]
            # g = 
            data = [data.values]
            city = city.downcase unless city.nil?
            state = val[:state].downcase unless val[:state].nil?
            g = Graph.create!(city: city , state: state, 
                            type: "bar_chart", 
                            title:"Quantidade de Tipo de Deficiência por Cidade",
                            data: data)   
        end
    end

    # Tornar texto maiúsculo caso não seja nil
    def self.to_upcase(text)
        unless text.nil?
            return text.upcase
        end
    end
    

end
