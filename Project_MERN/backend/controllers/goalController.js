const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user._id });

  res.status(200).json(goals);
};

// @desc    Set a goal
// @route   POST /api/goals
// @access  Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user._id,
  });

  res.status(201).json(goal);
};

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  if (goal.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to update this goal");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(updatedGoal);
};

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  if (goal.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to delete this goal");
  }

  await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
