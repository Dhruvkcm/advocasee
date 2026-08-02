"use client";

type DeleteButtonProps = {
  action: () => void | Promise<void>;
};

export default function DeleteButton({
  action,
}: DeleteButtonProps) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        const confirmed = window.confirm(
          "Are you sure you want to delete this case?"
        );

        if (!confirmed) {
          event.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="rounded-md bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-red-700"
      >
        Delete
      </button>
    </form>
  );
}