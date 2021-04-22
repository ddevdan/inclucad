require "test_helper"

class PostosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @posto = postos(:one)
  end

  test "should get index" do
    get postos_url, as: :json
    assert_response :success
  end

  test "should create posto" do
    assert_difference('Posto.count') do
      post postos_url, params: { posto: { name: @posto.name, posto_code: @posto.posto_code } }, as: :json
    end

    assert_response 201
  end

  test "should show posto" do
    get posto_url(@posto), as: :json
    assert_response :success
  end

  test "should update posto" do
    patch posto_url(@posto), params: { posto: { name: @posto.name, posto_code: @posto.posto_code } }, as: :json
    assert_response 200
  end

  test "should destroy posto" do
    assert_difference('Posto.count', -1) do
      delete posto_url(@posto), as: :json
    end

    assert_response 204
  end
end
