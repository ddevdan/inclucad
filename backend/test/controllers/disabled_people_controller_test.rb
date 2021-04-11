require "test_helper"

class DisabledPeopleControllerTest < ActionDispatch::IntegrationTest
  setup do
    @disabled_person = disabled_people(:one)
  end

  test "should get index" do
    get disabled_people_url, as: :json
    assert_response :success
  end

  test "should create disabled_person" do
    assert_difference('DisabledPerson.count') do
      post disabled_people_url, params: { disabled_person: { acquisition_form: @disabled_person.acquisition_form, born_date: @disabled_person.born_date, card_id: @disabled_person.card_id, deficiency_type: @disabled_person.deficiency_type, father_name: @disabled_person.father_name, gender: @disabled_person.gender, infos_add: @disabled_person.infos_add, mother_name: @disabled_person.mother_name, name: @disabled_person.name, scholarity: @disabled_person.scholarity, social_situation: @disabled_person.social_situation, society_limitation: @disabled_person.society_limitation, sus_id: @disabled_person.sus_id, work_card_id: @disabled_person.work_card_id } }, as: :json
    end

    assert_response 201
  end

  test "should show disabled_person" do
    get disabled_person_url(@disabled_person), as: :json
    assert_response :success
  end

  test "should update disabled_person" do
    patch disabled_person_url(@disabled_person), params: { disabled_person: { acquisition_form: @disabled_person.acquisition_form, born_date: @disabled_person.born_date, card_id: @disabled_person.card_id, deficiency_type: @disabled_person.deficiency_type, father_name: @disabled_person.father_name, gender: @disabled_person.gender, infos_add: @disabled_person.infos_add, mother_name: @disabled_person.mother_name, name: @disabled_person.name, scholarity: @disabled_person.scholarity, social_situation: @disabled_person.social_situation, society_limitation: @disabled_person.society_limitation, sus_id: @disabled_person.sus_id, work_card_id: @disabled_person.work_card_id } }, as: :json
    assert_response 200
  end

  test "should destroy disabled_person" do
    assert_difference('DisabledPerson.count', -1) do
      delete disabled_person_url(@disabled_person), as: :json
    end

    assert_response 204
  end
end
