require "test_helper"

class EvaluationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @evaluation = evaluations(:one)
  end

  test "should get index" do
    get evaluations_url, as: :json
    assert_response :success
  end

  test "should create evaluation" do
    assert_difference('Evaluation.count') do
      post evaluations_url, params: { evaluation: { born_with: @evaluation.born_with, cid_code: @evaluation.cid_code, disabled_type: @evaluation.disabled_type, evaluated_at: @evaluation.evaluated_at } }, as: :json
    end

    assert_response 201
  end

  test "should show evaluation" do
    get evaluation_url(@evaluation), as: :json
    assert_response :success
  end

  test "should update evaluation" do
    patch evaluation_url(@evaluation), params: { evaluation: { born_with: @evaluation.born_with, cid_code: @evaluation.cid_code, disabled_type: @evaluation.disabled_type, evaluated_at: @evaluation.evaluated_at } }, as: :json
    assert_response 200
  end

  test "should destroy evaluation" do
    assert_difference('Evaluation.count', -1) do
      delete evaluation_url(@evaluation), as: :json
    end

    assert_response 204
  end
end
